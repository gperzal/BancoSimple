package com.bancosimple.backend.rol_usuario.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RolUsuarioDTO {
    private Long id;
    private Long usuarioId;
    private Long rolId;
    private LocalDateTime fechaRegistro;
}
