package com.bancosimple.backend.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RolDTO {
    private Long id;
    private String nombre;
    private String descripcion;
}
