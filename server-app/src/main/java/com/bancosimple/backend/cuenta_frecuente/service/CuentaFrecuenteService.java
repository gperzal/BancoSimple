package com.bancosimple.backend.cuenta_frecuente.service;

import com.bancosimple.backend.cuenta_frecuente.model.CuentaFrecuente;

import java.util.List;
import java.util.Optional;

public interface CuentaFrecuenteService {
    List<CuentaFrecuente> findAll();
    Optional<CuentaFrecuente> findById(Long id);
    CuentaFrecuente save(CuentaFrecuente cuenta);
    void deleteById(Long id);
}
