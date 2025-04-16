package com.bancosimple.backend.features.promotion.repository;

import com.bancosimple.backend.features.promotion.model.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PromotionRepository extends JpaRepository<Promotion, Long> {
}
