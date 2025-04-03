package com.bancosimple.backend.service;

import com.bancosimple.backend.model.Transaccion;

import java.util.List;
import java.util.Optional;

public interface TransaccionService {
    List<Transaccion> findAll();
    Optional<Transaccion> findById(Long id);
    Transaccion save(Transaccion transaccion);
    void deleteById(Long id);
}
