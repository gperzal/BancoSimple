package com.bancosimple.backend.features.user_promotion.repository;

import com.bancosimple.backend.features.user_promotion.model.UserPromotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserPromotionRepository extends JpaRepository<UserPromotion, Long> {
}