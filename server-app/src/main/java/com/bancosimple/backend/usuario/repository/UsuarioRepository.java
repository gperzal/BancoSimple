package com.bancosimple.backend.usuario.repository;

import com.bancosimple.backend.usuario.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    boolean existsByCorreo(String correo);
    Optional<Usuario> findByCorreo(String correo);
}
