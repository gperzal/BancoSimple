package com.bancosimple.backend.service;

import com.bancosimple.backend.model.RolUsuario;

import java.util.List;
import java.util.Optional;

public interface RolUsuarioService {
    List<RolUsuario> findAll();
    Optional<RolUsuario> findById(Long id);
    RolUsuario save(RolUsuario rolUsuario);
    void deleteById(Long id);
}
