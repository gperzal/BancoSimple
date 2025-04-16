package com.bancosimple.backend.features.frequent_account.dto;

import java.time.LocalDateTime;

public record FrequentAccountDTO(
        Long id,
        Long userId,
        Long favoriteProductId,
        String alias,
        LocalDateTime addedDate,
        Boolean active
) {}
