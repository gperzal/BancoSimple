package com.bancosimple.backend.security.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class RegisterRequest {
    private String nombres;
    private String apellidos;
    private String correo;
    private String telefono;
    private String documentoTipo;
    private String documentoNumero;
    private String contrasena;
    private LocalDate fechaNacimiento;
}
