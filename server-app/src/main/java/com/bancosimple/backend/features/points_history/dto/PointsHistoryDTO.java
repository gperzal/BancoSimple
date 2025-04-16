package com.bancosimple.backend.features.points_history.dto;

import java.time.LocalDateTime;

public record PointsHistoryDTO(
        Long id,
        Long userId,
        String operationType,
        Integer points,
        String description,
        LocalDateTime date
) {}
