package com.bancosimple.backend.features.product.dto;

import com.bancosimple.backend.features.product.model.ProductType;
import com.bancosimple.backend.features.product.model.SegmentType;

import java.util.List;

public record ProductDTO(
        Long id,
        String name,
        ProductType productType,
        SegmentType segment,
        String description,
        List<String> features,
        String rate,
        Integer statusId
) {}
