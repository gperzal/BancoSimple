package com.bancosimple.backend.features.loyalty_points.dto;

import java.time.LocalDateTime;

public record LoyaltyPointsDTO(
        Long id,
        Long userId,
        Integer accumulatedPoints,
        Integer usedPoints,
        LocalDateTime updatedAt
) {}
