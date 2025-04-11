package com.bancosimple.backend.promocion_usuario.service;

import com.bancosimple.backend.promocion_usuario.model.PromocionUsuario;
import com.bancosimple.backend.promocion_usuario.repository.PromocionUsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PromocionUsuarioServiceImpl implements PromocionUsuarioService {

    private final PromocionUsuarioRepository repository;

    public PromocionUsuarioServiceImpl(PromocionUsuarioRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<PromocionUsuario> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<PromocionUsuario> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public PromocionUsuario save(PromocionUsuario promoUsuario) {
        return repository.save(promoUsuario);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
