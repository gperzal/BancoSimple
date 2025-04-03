package com.bancosimple.backend.service;

import com.bancosimple.backend.model.Direccion;
import com.bancosimple.backend.repository.DireccionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DireccionServiceImpl implements DireccionService {

    private final DireccionRepository direccionRepository;

    public DireccionServiceImpl(DireccionRepository direccionRepository) {
        this.direccionRepository = direccionRepository;
    }

    @Override
    public List<Direccion> findAll() {
        return direccionRepository.findAll();
    }

    @Override
    public Optional<Direccion> findById(Long id) {
        return direccionRepository.findById(id);
    }

    @Override
    public Direccion save(Direccion direccion) {
        return direccionRepository.save(direccion);
    }

    @Override
    public void deleteById(Long id) {
        direccionRepository.deleteById(id);
    }
}
