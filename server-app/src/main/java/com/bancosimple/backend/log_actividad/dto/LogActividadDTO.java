package com.bancosimple.backend.log_actividad.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LogActividadDTO {

    private Long id;
    private Long usuarioId;
    private String accion;
    private String ipOrigen;
    private LocalDateTime fecha;
    private String detalles;
}
