package com.bancosimple.backend.direccion.repository;

import com.bancosimple.backend.direccion.model.Direccion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DireccionRepository extends JpaRepository<Direccion, Long> {
}
