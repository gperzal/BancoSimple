package com.bancosimple.backend.features.user_product.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record UserProductDTO(
        Long id,
        Long userId,
        Long productId,
        String productNumber,
        String alias,
        BigDecimal balance,
        BigDecimal creditLimit,
        Integer statusId,
        LocalDateTime createdAt
) {}
