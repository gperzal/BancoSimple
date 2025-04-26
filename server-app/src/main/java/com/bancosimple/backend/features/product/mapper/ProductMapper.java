package com.bancosimple.backend.features.product.mapper;

import com.bancosimple.backend.features.product.dto.ProductDTO;
import com.bancosimple.backend.features.product.model.Product;

public class ProductMapper {

    public static ProductDTO toDTO(Product product) {
        return new ProductDTO(
                product.getId(),
                product.getName(),
                product.getProductType(),
                product.getSegment(),
                product.getDescription(),
                product.getFeatures(),
                product.getRate(),
                product.getStatusId()
        );
    }

    public static Product toEntity(ProductDTO dto) {
        return Product.builder()
                .id(dto.id())
                .name(dto.name())
                .productType(dto.productType())
                .segment(dto.segment())
                .description(dto.description())
                .features(dto.features())
                .rate(dto.rate())
                .statusId(dto.statusId())
                .build();
    }
}
