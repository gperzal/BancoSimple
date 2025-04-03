package com.bancosimple.backend.service;

import com.bancosimple.backend.model.Direccion;

import java.util.List;
import java.util.Optional;

public interface DireccionService {
    List<Direccion> findAll();
    Optional<Direccion> findById(Long id);
    Direccion save(Direccion direccion);
    void deleteById(Long id);
}
