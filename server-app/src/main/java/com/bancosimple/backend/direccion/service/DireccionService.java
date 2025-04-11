package com.bancosimple.backend.direccion.service;

import com.bancosimple.backend.direccion.model.Direccion;

import java.util.List;
import java.util.Optional;

public interface DireccionService {
    List<Direccion> findAll();
    Optional<Direccion> findById(Long id);
    Direccion save(Direccion direccion);
    void deleteById(Long id);
}
