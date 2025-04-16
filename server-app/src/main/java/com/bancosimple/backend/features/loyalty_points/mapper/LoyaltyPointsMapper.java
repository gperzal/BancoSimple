package com.bancosimple.backend.features.loyalty_points.mapper;

import com.bancosimple.backend.features.loyalty_points.dto.LoyaltyPointsDTO;
import com.bancosimple.backend.features.loyalty_points.model.LoyaltyPoints;

public class LoyaltyPointsMapper {
    public static LoyaltyPointsDTO toDTO(LoyaltyPoints l) {
        return new LoyaltyPointsDTO(
                l.getId(),
                l.getUserId(),
                l.getAccumulatedPoints(),
                l.getUsedPoints(),
                l.getUpdatedAt()
        );
    }

    public static LoyaltyPoints toEntity(LoyaltyPointsDTO dto) {
        return LoyaltyPoints.builder()
                .id(dto.id())
                .userId(dto.userId())
                .accumulatedPoints(dto.accumulatedPoints())
                .usedPoints(dto.usedPoints())
                .updatedAt(dto.updatedAt())
                .build();
    }
}