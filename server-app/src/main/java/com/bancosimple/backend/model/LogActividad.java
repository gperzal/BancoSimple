package com.bancosimple.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "logs_actividad")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LogActividad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "usuario_id")
    private Long usuarioId;

    private String accion;

    @Column(name = "ip_origen")
    private String ipOrigen;

    private LocalDateTime fecha;

    @Column(columnDefinition = "JSON")
    private String detalles;

    @PrePersist
    public void prePersist() {
        this.fecha = LocalDateTime.now();
    }
}
