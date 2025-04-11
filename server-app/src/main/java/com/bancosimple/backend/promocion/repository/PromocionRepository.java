package com.bancosimple.backend.promocion.repository;

import com.bancosimple.backend.promocion.model.Promocion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PromocionRepository extends JpaRepository<Promocion, Long> {
}
