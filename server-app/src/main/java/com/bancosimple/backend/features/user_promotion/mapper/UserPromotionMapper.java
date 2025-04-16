package com.bancosimple.backend.features.user_promotion.mapper;

import com.bancosimple.backend.features.user_promotion.dto.UserPromotionDTO;
import com.bancosimple.backend.features.user_promotion.model.UserPromotion;

public class UserPromotionMapper {
    public static UserPromotionDTO toDTO(UserPromotion p) {
        return new UserPromotionDTO(
                p.getId(),
                p.getUserId(),
                p.getPromotionId(),
                p.getProductId(),
                p.getTransactionId(),
                p.getApplicationType(),
                p.getAppliedAmount(),
                p.getApplicationDate()
        );
    }

    public static UserPromotion toEntity(UserPromotionDTO dto) {
        return UserPromotion.builder()
                .id(dto.id())
                .userId(dto.userId())
                .promotionId(dto.promotionId())
                .productId(dto.productId())
                .transactionId(dto.transactionId())
                .applicationType(dto.applicationType())
                .appliedAmount(dto.appliedAmount())
                .applicationDate(dto.applicationDate())
                .build();
    }
}

