package com.bancosimple.backend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DireccionDTO {

    private Long id;
    private Long usuarioId;
    private String tipoDireccion;
    private String calle;
    private String numero;
    private String comuna;
    private String ciudad;
    private String region;
    private String codigoPostal;
    private String pais;
    private Boolean activa;
    private LocalDateTime fechaCreacion;
}
