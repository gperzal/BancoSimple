package com.bancosimple.backend.service;

import com.bancosimple.backend.model.CuentaFrecuente;

import java.util.List;
import java.util.Optional;

public interface CuentaFrecuenteService {
    List<CuentaFrecuente> findAll();
    Optional<CuentaFrecuente> findById(Long id);
    CuentaFrecuente save(CuentaFrecuente cuenta);
    void deleteById(Long id);
}
