package com.bancosimple.backend.log_respaldo.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "logs_respaldo")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LogRespaldo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "usuario_accion")
    private Long usuarioAccion;

    private String tabla;

    @Column(name = "id_registro")
    private Long idRegistro;

    @Column(name = "tipo_operacion")
    private String tipoOperacion;

    @Column(name = "datos_anteriores", columnDefinition = "JSON")
    private String datosAnteriores;

    @Column(name = "datos_nuevos", columnDefinition = "JSON")
    private String datosNuevos;

    private LocalDateTime fecha;

    @Column(name = "ip_origen")
    private String ipOrigen;

    @PrePersist
    public void prePersist() {
        this.fecha = LocalDateTime.now();
    }
}
