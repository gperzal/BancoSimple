package com.bancosimple.backend.features.frequent_account.mapper;

import com.bancosimple.backend.features.frequent_account.dto.FrequentAccountDTO;
import com.bancosimple.backend.features.frequent_account.model.FrequentAccount;

public class FrequentAccountMapper {
    public static FrequentAccountDTO toDTO(FrequentAccount fa) {
        return new FrequentAccountDTO(
                fa.getId(),
                fa.getUserId(),
                fa.getType(),
                fa.getFavoriteProductId(),
                fa.getExternalBankName(),
                fa.getExternalAccountNumber(),
                fa.getExternalHolderName(),
                fa.getAlias(),
                fa.getAddedDate(),
                fa.getActive()
        );
    }

    public static FrequentAccount toEntity(FrequentAccountDTO dto) {
        return FrequentAccount.builder()
                .id(dto.id())
                .userId(dto.userId())
                .type(dto.type())
                .favoriteProductId(dto.favoriteProductId())
                .externalBankName(dto.externalBankName())
                .externalAccountNumber(dto.externalAccountNumber())
                .externalHolderName(dto.externalHolderName())
                .alias(dto.alias())
                .addedDate(dto.addedDate())
                .active(dto.active())
                .build();
    }
}