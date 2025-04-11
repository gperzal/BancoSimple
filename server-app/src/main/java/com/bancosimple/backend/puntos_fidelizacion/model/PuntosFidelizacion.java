package com.bancosimple.backend.puntos_fidelizacion.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "puntos_fidelizacion")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PuntosFidelizacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "usuario_id")
    private Long usuarioId;

    @Column(name = "puntos_acumulados")
    private int puntosAcumulados;

    @Column(name = "puntos_utilizados")
    private int puntosUtilizados;

    @Column(name = "fecha_actualizacion")
    private LocalDateTime fechaActualizacion;

    @PrePersist
    public void prePersist() {
        this.fechaActualizacion = LocalDateTime.now();
    }
}
