package com.bancosimple.backend.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PromocionUsuarioDTO {
    private Long id;
    private Long usuarioId;
    private Long promocionId;
    private Long productoId;
    private Long transaccionId;
    private String tipoAplicacion;
    private Double montoAplicado;
    private LocalDateTime fechaAplicacion;
}
