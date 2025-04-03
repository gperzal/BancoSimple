package com.bancosimple.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "promociones_usuarios")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PromocionUsuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "usuario_id")
    private Long usuarioId;

    @Column(name = "promocion_id")
    private Long promocionId;

    @Column(name = "producto_id")
    private Long productoId;

    @Column(name = "transaccion_id")
    private Long transaccionId;

    @Column(name = "tipo_aplicacion")
    private String tipoAplicacion; // 'descuento' o 'cashback'

    @Column(name = "monto_aplicado")
    private Double montoAplicado;

    @Column(name = "fecha_aplicacion")
    private LocalDateTime fechaAplicacion;

    @PrePersist
    public void prePersist() {
        this.fechaAplicacion = LocalDateTime.now();
    }
}
