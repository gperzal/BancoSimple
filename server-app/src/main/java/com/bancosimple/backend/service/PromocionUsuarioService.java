package com.bancosimple.backend.service;

import com.bancosimple.backend.model.PromocionUsuario;

import java.util.List;
import java.util.Optional;

public interface PromocionUsuarioService {
    List<PromocionUsuario> findAll();
    Optional<PromocionUsuario> findById(Long id);
    PromocionUsuario save(PromocionUsuario promoUsuario);
    void deleteById(Long id);
}
