package com.bancosimple.backend.security.service;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.security.dto.LoginRequest;
import com.bancosimple.backend.security.dto.LoginResponse;
import com.bancosimple.backend.security.dto.RegisterRequest;
import com.bancosimple.backend.security.jwt.JwtUtil;
import com.bancosimple.backend.features.user.model.User;
import com.bancosimple.backend.features.user.repository.UserRepository;
import com.bancosimple.backend.features.user_role.model.UserRole;
import com.bancosimple.backend.features.user_role.repository.UserRoleRepository;
import static com.bancosimple.backend.features.role.shared.RoleUtils.getRoleName;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@RequiredArgsConstructor
@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final CustomUserDetailsService userDetailsService;
    private final UserRoleRepository userRoleRepository;

    public void register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new ApiException("Mail is already in use");
        }

        User user = new User();
        user.setEmail(request.getEmail());
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setPasswordHash(passwordEncoder.encode(request.getPasswordHash()));

        User savedUser = userRepository.save(user);

        UserRole userRole = new UserRole();
        userRole.setUserId(savedUser.getId());
        userRole.setRoleId(3L); // Rol por defecto: CLIENT
        userRole.setRegisteredAt(LocalDateTime.now());

        userRoleRepository.save(userRole);
    }

    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
        String jwt = jwtUtil.generateToken(userDetails);

        User user = userRepository.findByEmail(request.getEmail()).orElseThrow(() -> new ApiException("Mail does not exist"));

        String rol = getRoleName(user.getUserRoles().getFirst().getRoleId());


       return new LoginResponse(jwt, user.getEmail(), rol);
    }


}
