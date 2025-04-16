package com.bancosimple.backend.features.card.dto;

import java.time.LocalDate;

public record CardDTO(
        Long id,
        Long productId,
        String cardType,
        String cardNumber,
        String cvv,
        String pinHash,
        LocalDate expirationDate,
        String printedName,
        Boolean active,
        Integer stateId,
        LocalDate issuedAt
) {}
