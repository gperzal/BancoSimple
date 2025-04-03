package com.bancosimple.backend.service;

import com.bancosimple.backend.model.HistorialPuntos;
import com.bancosimple.backend.repository.HistorialPuntosRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HistorialPuntosServiceImpl implements HistorialPuntosService {

    private final HistorialPuntosRepository repository;

    public HistorialPuntosServiceImpl(HistorialPuntosRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<HistorialPuntos> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<HistorialPuntos> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public HistorialPuntos save(HistorialPuntos historial) {
        return repository.save(historial);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
