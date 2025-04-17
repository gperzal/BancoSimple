package com.bancosimple.backend.features.promotion.dto;

import java.math.BigDecimal;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.List;

public record PromotionDTO(
        Long id,
        String name,
        String description,
        String type,
        BigDecimal percentage,
        BigDecimal maxAmount,
        List<DayOfWeek> weekDays,
        String store,
        LocalDate startDate,
        LocalDate endDate,
        Boolean isActive
) {}
