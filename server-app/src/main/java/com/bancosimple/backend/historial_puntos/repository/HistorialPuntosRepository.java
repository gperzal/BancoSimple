package com.bancosimple.backend.historial_puntos.repository;

import com.bancosimple.backend.historial_puntos.model.HistorialPuntos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistorialPuntosRepository extends JpaRepository<HistorialPuntos, Long> {
}
