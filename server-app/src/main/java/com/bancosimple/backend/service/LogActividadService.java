package com.bancosimple.backend.service;

import com.bancosimple.backend.model.LogActividad;

import java.util.List;
import java.util.Optional;

public interface LogActividadService {
    List<LogActividad> findAll();
    Optional<LogActividad> findById(Long id);
    LogActividad save(LogActividad log);
    void deleteById(Long id);
}
