package com.bancosimple.backend.dto;

import lombok.*;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PromocionDTO {
    private Long id;
    private String nombre;
    private String descripcion;
    private String tipo;
    private Double porcentaje;
    private Double topeMonto;
    private String diasSemana;
    private String comercio;
    private LocalDate fechaInicio;
    private LocalDate fechaFin;
    private Boolean activa;
}
