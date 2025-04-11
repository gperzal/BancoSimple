package com.bancosimple.backend.cuenta_frecuente.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "cuentas_frecuentes")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CuentaFrecuente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "usuario_id")
    private Long usuarioId;

    @Column(name = "producto_favorito_id")
    private Long productoFavoritoId;

    private String alias;

    @Column(name = "fecha_agregado")
    private LocalDateTime fechaAgregado;

    private Boolean activa;

    @PrePersist
    public void onCreate() {
        this.fechaAgregado = LocalDateTime.now();
        if (this.activa == null) this.activa = true;
    }
}
