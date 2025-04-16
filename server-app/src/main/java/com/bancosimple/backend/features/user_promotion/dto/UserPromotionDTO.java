package com.bancosimple.backend.features.user_promotion.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record UserPromotionDTO(
        Long id,
        Long userId,
        Long promotionId,
        Long productId,
        Long transactionId,
        String applicationType,
        BigDecimal appliedAmount,
        LocalDateTime applicationDate
) {}
