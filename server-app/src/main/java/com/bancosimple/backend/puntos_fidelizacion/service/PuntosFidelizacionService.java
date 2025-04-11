package com.bancosimple.backend.puntos_fidelizacion.service;

import com.bancosimple.backend.puntos_fidelizacion.model.PuntosFidelizacion;

import java.util.List;
import java.util.Optional;

public interface PuntosFidelizacionService {
    List<PuntosFidelizacion> findAll();
    Optional<PuntosFidelizacion> findById(Long id);
    PuntosFidelizacion save(PuntosFidelizacion puntos);
    void deleteById(Long id);
}
