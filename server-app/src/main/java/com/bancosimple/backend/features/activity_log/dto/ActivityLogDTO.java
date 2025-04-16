package com.bancosimple.backend.features.activity_log.dto;

import java.time.LocalDateTime;

public record ActivityLogDTO(
        Long id,
        Long userId,
        String action,
        String sourceIp,
        LocalDateTime date,
        String details
) {}