package com.bancosimple.backend.historial_puntos.service;

import com.bancosimple.backend.historial_puntos.model.HistorialPuntos;

import java.util.List;
import java.util.Optional;

public interface HistorialPuntosService {
    List<HistorialPuntos> findAll();
    Optional<HistorialPuntos> findById(Long id);
    HistorialPuntos save(HistorialPuntos historial);
    void deleteById(Long id);
}
