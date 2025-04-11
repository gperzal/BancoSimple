package com.bancosimple.backend.estado.repository;

import com.bancosimple.backend.estado.model.Estado;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EstadoRepository extends JpaRepository<Estado, Long> {
}
