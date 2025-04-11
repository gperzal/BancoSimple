package com.bancosimple.backend.producto.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "productos")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "usuario_id")
    private Long usuarioId;

    @Column(name = "tipo_producto")
    private String tipoProducto;

    @Column(name = "numero_producto")
    private String numeroProducto;

    private String alias;
    private String moneda;
    private BigDecimal saldo;

    @Column(name = "limite_credito")
    private BigDecimal limiteCredito;

    @Column(name = "estado_id")
    private Integer estadoId;

    @Column(name = "creado_en")
    private LocalDateTime creadoEn;

    @PrePersist
    public void prePersist() {
        this.creadoEn = LocalDateTime.now();
    }
}
