package com.bancosimple.backend.service;

import com.bancosimple.backend.model.LogActividad;
import com.bancosimple.backend.repository.LogActividadRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LogActividadServiceImpl implements LogActividadService {

    private final LogActividadRepository repository;

    public LogActividadServiceImpl(LogActividadRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<LogActividad> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<LogActividad> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public LogActividad save(LogActividad log) {
        return repository.save(log);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
