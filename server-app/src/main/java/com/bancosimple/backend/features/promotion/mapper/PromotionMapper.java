package com.bancosimple.backend.features.promotion.mapper;

import com.bancosimple.backend.features.promotion.dto.PromotionDTO;
import com.bancosimple.backend.features.promotion.model.Promotion;

public class PromotionMapper {
    public static PromotionDTO toDTO(Promotion p) {
        return new PromotionDTO(
                p.getId(),
                p.getName(),
                p.getDescription(),
                p.getType(),
                p.getPercentage(),
                p.getMaxAmount(),
                p.getWeekDays(),
                p.getStore(),
                p.getStartDate(),
                p.getEndDate(),
                p.getIsActive()
        );
    }

    public static Promotion toEntity(PromotionDTO dto) {
        return Promotion.builder()
                .id(dto.id())
                .name(dto.name())
                .description(dto.description())
                .type(dto.type())
                .percentage(dto.percentage())
                .maxAmount(dto.maxAmount())
                .weekDays(dto.weekDays())
                .store(dto.store())
                .startDate(dto.startDate())
                .endDate(dto.endDate())
                .isActive(dto.isActive())
                .build();
    }
}
