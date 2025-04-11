package com.bancosimple.backend.usuario.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioDTO {

    private Long id;
    private String uuid;
    private String nombres;
    private String apellidos;
    private String correo;
    private String telefono;
    private String documentoTipo;
    private String documentoNumero;
    private String contrasenaHash;
    private LocalDate fechaNacimiento;
    private LocalDateTime fechaRegistro;
    private Integer estadoId;
}
