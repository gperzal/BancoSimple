package com.bancosimple.backend.log_respaldo.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LogRespaldoDTO {
    private Long id;
    private Long usuarioAccion;
    private String tabla;
    private Long idRegistro;
    private String tipoOperacion;
    private String datosAnteriores;
    private String datosNuevos;
    private LocalDateTime fecha;
    private String ipOrigen;
}
