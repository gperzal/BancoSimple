package com.bancosimple.backend.service;

import com.bancosimple.backend.model.PuntosFidelizacion;
import com.bancosimple.backend.repository.PuntosFidelizacionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PuntosFidelizacionServiceImpl implements PuntosFidelizacionService {

    private final PuntosFidelizacionRepository repository;

    public PuntosFidelizacionServiceImpl(PuntosFidelizacionRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<PuntosFidelizacion> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<PuntosFidelizacion> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public PuntosFidelizacion save(PuntosFidelizacion puntos) {
        return repository.save(puntos);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
