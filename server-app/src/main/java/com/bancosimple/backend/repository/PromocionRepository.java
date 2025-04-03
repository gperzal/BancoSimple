package com.bancosimple.backend.repository;

import com.bancosimple.backend.model.Promocion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PromocionRepository extends JpaRepository<Promocion, Long> {
}
