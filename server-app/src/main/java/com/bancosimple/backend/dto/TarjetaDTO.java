package com.bancosimple.backend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TarjetaDTO {

    private Long id;
    private Long productoId;
    private String tipoTarjeta;
    private String numeroTarjeta;
    private String cvv;
    private String pinHash;
    private LocalDate fechaExpiracion;
    private String nombreImpreso;
    private Boolean activa;
    private Integer estadoId;
    private LocalDateTime emitida;
}
