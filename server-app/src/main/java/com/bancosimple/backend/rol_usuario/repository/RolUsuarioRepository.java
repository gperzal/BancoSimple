package com.bancosimple.backend.rol_usuario.repository;

import com.bancosimple.backend.rol_usuario.model.RolUsuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolUsuarioRepository extends JpaRepository<RolUsuario, Long> {
}
