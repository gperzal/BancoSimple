package com.bancosimple.backend.service;

import com.bancosimple.backend.model.Tarjeta;

import java.util.List;
import java.util.Optional;

public interface TarjetaService {
    List<Tarjeta> findAll();
    Optional<Tarjeta> findById(Long id);
    Tarjeta save(Tarjeta tarjeta);
    void deleteById(Long id);
}
