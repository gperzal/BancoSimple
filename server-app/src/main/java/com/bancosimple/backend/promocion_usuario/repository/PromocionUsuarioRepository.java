package com.bancosimple.backend.promocion_usuario.repository;

import com.bancosimple.backend.promocion_usuario.model.PromocionUsuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PromocionUsuarioRepository extends JpaRepository<PromocionUsuario, Long> {
}
