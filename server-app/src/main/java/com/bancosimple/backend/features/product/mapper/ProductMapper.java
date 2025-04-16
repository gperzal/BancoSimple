package com.bancosimple.backend.features.product.mapper;

import com.bancosimple.backend.features.product.dto.ProductDTO;
import com.bancosimple.backend.features.product.model.Product;

public class ProductMapper {
    public static ProductDTO toDTO(Product p) {
        return new ProductDTO(
                p.getId(),
                p.getUserId(),
                p.getProductType(),
                p.getProductNumber(),
                p.getAlias(),
                p.getCurrency(),
                p.getBalance(),
                p.getCreditLimit(),
                p.getStatusId(),
                p.getCreatedAt()
        );
    }

    public static Product toEntity(ProductDTO dto) {
        return Product.builder()
                .id(dto.id())
                .userId(dto.userId())
                .productType(dto.productType())
                .productNumber(dto.productNumber())
                .alias(dto.alias())
                .currency(dto.currency())
                .balance(dto.balance())
                .creditLimit(dto.creditLimit())
                .statusId(dto.statusId())
                .createdAt(dto.createdAt())
                .build();
    }
}
