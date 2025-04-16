package com.bancosimple.backend.features.backup_log.dto;

import java.time.LocalDateTime;

public record BackupLogDTO(
        Long id,
        Long userActionId,
        String table,
        Long recordId,
        String operationType,
        String previousData,
        String newData,
        LocalDateTime createdAt,
        String ipAddress
) {}
