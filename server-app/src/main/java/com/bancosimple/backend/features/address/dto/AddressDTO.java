package com.bancosimple.backend.features.address.dto;

import java.time.LocalDateTime;

public record AddressDTO(
        Long id,
        Long userId,
        String addressType,
        String street,
        String number,
        String district,
        String city,
        String region,
        String postalCode,
        String country,
        Boolean isActive,
        LocalDateTime createdAt
) {}
