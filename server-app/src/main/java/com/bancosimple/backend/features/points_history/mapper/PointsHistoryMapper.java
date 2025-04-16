package com.bancosimple.backend.features.points_history.mapper;

import com.bancosimple.backend.features.points_history.dto.PointsHistoryDTO;
import com.bancosimple.backend.features.points_history.model.PointsHistory;

public class PointsHistoryMapper {

    public static PointsHistoryDTO toDTO(PointsHistory p) {
        return new PointsHistoryDTO(
                p.getId(),
                p.getUserId(),
                p.getOperationType(),
                p.getPoints(),
                p.getDescription(),
                p.getDate()
        );
    }

    public static PointsHistory toEntity(PointsHistoryDTO dto) {
        return PointsHistory.builder()
                .id(dto.id())
                .userId(dto.userId())
                .operationType(dto.operationType())
                .points(dto.points())
                .description(dto.description())
                .date(dto.date())
                .build();
    }
}
