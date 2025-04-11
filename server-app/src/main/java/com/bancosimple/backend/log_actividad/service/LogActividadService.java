package com.bancosimple.backend.log_actividad.service;

import com.bancosimple.backend.log_actividad.model.LogActividad;

import java.util.List;
import java.util.Optional;

public interface LogActividadService {
    List<LogActividad> findAll();
    Optional<LogActividad> findById(Long id);
    LogActividad save(LogActividad log);
    void deleteById(Long id);
}
