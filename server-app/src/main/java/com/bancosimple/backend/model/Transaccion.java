package com.bancosimple.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "transacciones")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Transaccion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "producto_id_origen")
    private Long productoIdOrigen;

    @Column(name = "producto_id_destino")
    private Long productoIdDestino;

    private BigDecimal monto;

    private String moneda;

    private String descripcion;

    private String categoria;

    @Column(name = "referencia_externa")
    private String referenciaExterna;

    @Column(name = "estado_id")
    private Integer estadoId;

    private LocalDateTime fecha;

    @PrePersist
    public void prePersist() {
        this.fecha = LocalDateTime.now();
    }
}
