package com.bancosimple.backend.features.backup_log.mapper;

import com.bancosimple.backend.features.backup_log.dto.BackupLogDTO;
import com.bancosimple.backend.features.backup_log.model.BackupLog;

public class BackupLogMapper {
    public static BackupLogDTO toDTO(BackupLog l) {
        return new BackupLogDTO(
                l.getId(),
                l.getUserActionId(),
                l.getTable(),
                l.getRecordId(),
                l.getOperationType(),
                l.getPreviousData(),
                l.getNewData(),
                l.getCreatedAt(),
                l.getIpAddress()
        );
    }

    public static BackupLog toEntity(BackupLogDTO dto) {
        return BackupLog.builder()
                .id(dto.id())
                .userActionId(dto.userActionId())
                .table(dto.table())
                .recordId(dto.recordId())
                .operationType(dto.operationType())
                .previousData(dto.previousData())
                .newData(dto.newData())
                .createdAt(dto.createdAt())
                .ipAddress(dto.ipAddress())
                .build();
    }
}