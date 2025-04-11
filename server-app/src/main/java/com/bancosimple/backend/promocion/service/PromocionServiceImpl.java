package com.bancosimple.backend.promocion.service;

import com.bancosimple.backend.promocion.model.Promocion;
import com.bancosimple.backend.promocion.repository.PromocionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PromocionServiceImpl implements PromocionService {

    private final PromocionRepository repository;

    public PromocionServiceImpl(PromocionRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Promocion> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Promocion> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Promocion save(Promocion promocion) {
        return repository.save(promocion);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
