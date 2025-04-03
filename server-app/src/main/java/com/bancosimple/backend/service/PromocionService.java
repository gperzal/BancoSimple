package com.bancosimple.backend.service;

import com.bancosimple.backend.model.Promocion;

import java.util.List;
import java.util.Optional;

public interface PromocionService {
    List<Promocion> findAll();
    Optional<Promocion> findById(Long id);
    Promocion save(Promocion promocion);
    void deleteById(Long id);
}
