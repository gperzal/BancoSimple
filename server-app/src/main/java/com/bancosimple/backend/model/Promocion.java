package com.bancosimple.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "promociones")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Promocion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String descripcion;
    private String tipo;
    private Double porcentaje;

    @Column(name = "tope_monto")
    private Double topeMonto;

    @Column(name = "dias_semana")
    private String diasSemana; // Guardamos como texto plano separado por comas, ej: "LUNES,MARTES"

    private String comercio;

    @Column(name = "fecha_inicio")
    private LocalDate fechaInicio;

    @Column(name = "fecha_fin")
    private LocalDate fechaFin;

    private Boolean activa;
}
