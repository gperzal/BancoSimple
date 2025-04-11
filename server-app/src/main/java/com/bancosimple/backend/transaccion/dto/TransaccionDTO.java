package com.bancosimple.backend.transaccion.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransaccionDTO {

    private Long id;
    private Long productoIdOrigen;
    private Long productoIdDestino;
    private BigDecimal monto;
    private String moneda;
    private String descripcion;
    private String categoria;
    private String referenciaExterna;
    private Integer estadoId;
    private LocalDateTime fecha;
}
