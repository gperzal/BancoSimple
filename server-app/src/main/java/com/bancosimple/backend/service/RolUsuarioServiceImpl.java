package com.bancosimple.backend.service;

import com.bancosimple.backend.model.RolUsuario;
import com.bancosimple.backend.repository.RolUsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RolUsuarioServiceImpl implements RolUsuarioService {

    private final RolUsuarioRepository repository;

    public RolUsuarioServiceImpl(RolUsuarioRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<RolUsuario> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<RolUsuario> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public RolUsuario save(RolUsuario rolUsuario) {
        return repository.save(rolUsuario);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
