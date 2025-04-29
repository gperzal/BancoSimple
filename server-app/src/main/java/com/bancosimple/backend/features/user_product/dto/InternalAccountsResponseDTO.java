package com.bancosimple.backend.features.user_product.dto;

import java.util.List;

public record InternalAccountsResponseDTO(
        String rut,
        String email,
        String fullName,
        List<InternalAccountDTO> internalAccounts
) {
    public record InternalAccountDTO(
            Long id,
            String name,
            String category,
            String productNumber
    ) {}
}
