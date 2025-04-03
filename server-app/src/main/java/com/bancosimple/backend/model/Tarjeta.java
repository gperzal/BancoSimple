package com.bancosimple.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "tarjetas")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tarjeta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "producto_id")
    private Long productoId;

    @Column(name = "tipo_tarjeta")
    private String tipoTarjeta;

    @Column(name = "numero_tarjeta")
    private String numeroTarjeta;

    private String cvv;

    @Column(name = "pin_hash")
    private String pinHash;

    @Column(name = "fecha_expiracion")
    private LocalDate fechaExpiracion;

    @Column(name = "nombre_impreso")
    private String nombreImpreso;

    private Boolean activa = true;

    @Column(name = "estado_id")
    private Integer estadoId;

    private LocalDateTime emitida;

    @PrePersist
    public void prePersist() {
        this.emitida = LocalDateTime.now();
    }
}
