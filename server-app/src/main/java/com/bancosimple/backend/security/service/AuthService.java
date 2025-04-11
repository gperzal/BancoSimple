package com.bancosimple.backend.security.service;

import com.bancosimple.backend.security.dto.LoginRequest;
import com.bancosimple.backend.security.dto.LoginResponse;
import com.bancosimple.backend.security.dto.RegisterRequest;
import com.bancosimple.backend.security.jwt.JwtUtil;
import com.bancosimple.backend.usuario.model.Usuario;
import com.bancosimple.backend.usuario.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final UserDetailsService userDetailsService;

    public void register(RegisterRequest request) {
        if (usuarioRepository.existsByCorreo(request.getCorreo())) {
            throw new RuntimeException("El correo ya está en uso");
        }

        Usuario usuario = new Usuario();
        usuario.setCorreo(request.getCorreo());
        usuario.setNombres(request.getNombres());
        usuario.setApellidos(request.getApellidos());
        usuario.setContrasenaHash(passwordEncoder.encode(request.getContrasena()));

        usuarioRepository.save(usuario);
    }

    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getCorreo(),
                        request.getContrasena()
                )
        );

        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getCorreo());
        String jwt = jwtUtil.generateToken(userDetails);

        return new LoginResponse(jwt, request.getCorreo());
    }
}
