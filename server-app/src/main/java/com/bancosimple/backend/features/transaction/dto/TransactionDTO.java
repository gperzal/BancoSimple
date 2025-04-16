package com.bancosimple.backend.features.transaction.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record TransactionDTO(
        Long id,
        Long originProductId,
        Long destinationProductId,
        BigDecimal amount,
        String currency,
        String description,
        String category,
        String externalReference,
        Integer statusId,
        LocalDateTime date,
        String operationType
) {}
