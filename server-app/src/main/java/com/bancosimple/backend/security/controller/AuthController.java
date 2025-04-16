package com.bancosimple.backend.security.controller;

import com.bancosimple.backend.security.dto.LoginRequest;
import com.bancosimple.backend.security.dto.LoginResponse;
import com.bancosimple.backend.security.dto.RegisterRequest;
import com.bancosimple.backend.security.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@Valid @RequestBody  RegisterRequest request) {
        authService.register(request);
        return ResponseEntity.ok("User successfully registered");
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }


}
