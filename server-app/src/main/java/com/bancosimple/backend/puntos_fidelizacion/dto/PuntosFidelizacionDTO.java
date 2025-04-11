package com.bancosimple.backend.puntos_fidelizacion.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PuntosFidelizacionDTO {
    private Long id;
    private Long usuarioId;
    private int puntosAcumulados;
    private int puntosUtilizados;
    private LocalDateTime fechaActualizacion;
}
