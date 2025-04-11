package com.bancosimple.backend.estado.service;

import com.bancosimple.backend.estado.model.Estado;
import com.bancosimple.backend.estado.repository.EstadoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EstadoServiceImpl implements EstadoService {

    private final EstadoRepository estadoRepository;

    public EstadoServiceImpl(EstadoRepository estadoRepository) {
        this.estadoRepository = estadoRepository;
    }

    @Override
    public List<Estado> findAll() {
        return estadoRepository.findAll();
    }

    @Override
    public Optional<Estado> findById(Long id) {
        return estadoRepository.findById(id);
    }

    @Override
    public Estado save(Estado estado) {
        return estadoRepository.save(estado);
    }

    @Override
    public void deleteById(Long id) {
        estadoRepository.deleteById(id);
    }
}
