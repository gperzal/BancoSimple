package com.bancosimple.backend.security.controller;

import com.bancosimple.backend.security.dto.LoginRequest;
import com.bancosimple.backend.security.dto.LoginResponse;
import com.bancosimple.backend.security.dto.RegisterRequest;
import com.bancosimple.backend.security.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        authService.register(request);
        return ResponseEntity.ok("Usuario registrado correctamente");
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }
}
