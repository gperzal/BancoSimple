package com.bancosimple.backend.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HistorialPuntosDTO {
    private Long id;
    private Long usuarioId;
    private String tipoOperacion;
    private int puntos;
    private String descripcion;
    private LocalDateTime fecha;
}
