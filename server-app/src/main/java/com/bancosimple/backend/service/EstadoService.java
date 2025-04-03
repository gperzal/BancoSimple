package com.bancosimple.backend.service;

import com.bancosimple.backend.model.Estado;

import java.util.List;
import java.util.Optional;

public interface EstadoService {
    List<Estado> findAll();
    Optional<Estado> findById(Long id);
    Estado save(Estado estado);
    void deleteById(Long id);
}
