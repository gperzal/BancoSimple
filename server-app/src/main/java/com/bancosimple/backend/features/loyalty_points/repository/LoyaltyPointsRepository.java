package com.bancosimple.backend.features.loyalty_points.repository;

import com.bancosimple.backend.features.loyalty_points.model.LoyaltyPoints;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoyaltyPointsRepository extends JpaRepository<LoyaltyPoints, Long> {
}
