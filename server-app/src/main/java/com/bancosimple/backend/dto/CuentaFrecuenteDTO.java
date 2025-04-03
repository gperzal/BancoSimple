package com.bancosimple.backend.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CuentaFrecuenteDTO {
    private Long id;
    private Long usuarioId;
    private Long productoFavoritoId;
    private String alias;
    private LocalDateTime fechaAgregado;
    private Boolean activa;
}
