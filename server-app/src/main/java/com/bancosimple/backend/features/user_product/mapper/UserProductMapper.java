package com.bancosimple.backend.features.user_product.mapper;

import com.bancosimple.backend.features.user_product.dto.UserProductDTO;
import com.bancosimple.backend.features.user_product.model.UserProduct;

public class UserProductMapper {

    public static UserProductDTO toDTO(UserProduct entity) {
        return new UserProductDTO(
                entity.getId(),
                entity.getUserId(),
                entity.getProductId(),
                entity.getProductNumber(),
                entity.getAlias(),
                entity.getBalance(),
                entity.getCreditLimit(),
                entity.getStatusId(),
                entity.getCreatedAt()
        );
    }

    public static UserProduct toEntity(UserProductDTO dto) {
        return UserProduct.builder()
                .id(dto.id())
                .userId(dto.userId())
                .productId(dto.productId())
                .productNumber(dto.productNumber())
                .alias(dto.alias())
                .balance(dto.balance())
                .creditLimit(dto.creditLimit())
                .statusId(dto.statusId())
                .createdAt(dto.createdAt())
                .build();
    }
}
