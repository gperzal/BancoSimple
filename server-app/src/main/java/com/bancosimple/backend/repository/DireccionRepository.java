package com.bancosimple.backend.repository;

import com.bancosimple.backend.model.Direccion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DireccionRepository extends JpaRepository<Direccion, Long> {
}
