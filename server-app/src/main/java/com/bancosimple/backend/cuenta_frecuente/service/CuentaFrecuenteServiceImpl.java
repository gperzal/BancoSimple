package com.bancosimple.backend.cuenta_frecuente.service;

import com.bancosimple.backend.cuenta_frecuente.model.CuentaFrecuente;
import com.bancosimple.backend.cuenta_frecuente.repository.CuentaFrecuenteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CuentaFrecuenteServiceImpl implements CuentaFrecuenteService {

    private final CuentaFrecuenteRepository repository;

    public CuentaFrecuenteServiceImpl(CuentaFrecuenteRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<CuentaFrecuente> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<CuentaFrecuente> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public CuentaFrecuente save(CuentaFrecuente cuenta) {
        return repository.save(cuenta);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
