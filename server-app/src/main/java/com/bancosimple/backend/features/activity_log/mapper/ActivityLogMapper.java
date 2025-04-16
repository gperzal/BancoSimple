package com.bancosimple.backend.features.activity_log.mapper;

import com.bancosimple.backend.features.activity_log.dto.ActivityLogDTO;
import com.bancosimple.backend.features.activity_log.model.ActivityLog;

public class ActivityLogMapper {

    public static ActivityLogDTO toDTO(ActivityLog entity) {
        return new ActivityLogDTO(
                entity.getId(),
                entity.getUserId(),
                entity.getAction(),
                entity.getSourceIp(),
                entity.getDate(),
                entity.getDetails()
        );
    }

    public static ActivityLog toEntity(ActivityLogDTO dto) {
        return ActivityLog.builder()
                .id(dto.id())
                .userId(dto.userId())
                .action(dto.action())
                .sourceIp(dto.sourceIp())
                .date(dto.date())
                .details(dto.details())
                .build();
    }
}