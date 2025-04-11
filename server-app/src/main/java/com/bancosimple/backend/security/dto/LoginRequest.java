package com.bancosimple.backend.security.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String correo;
    private String contrasena;
}
