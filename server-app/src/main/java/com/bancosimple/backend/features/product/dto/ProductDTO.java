package com.bancosimple.backend.features.product.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record ProductDTO(
        Long id,
        Long userId,
        String productType,
        String productNumber,
        String alias,
        String currency,
        BigDecimal balance,
        BigDecimal creditLimit,
        Integer statusId,
        LocalDateTime createdAt
) {}
