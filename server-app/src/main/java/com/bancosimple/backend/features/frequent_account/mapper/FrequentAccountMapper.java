package com.bancosimple.backend.features.frequent_account.mapper;

import com.bancosimple.backend.features.frequent_account.dto.FrequentAccountDTO;
import com.bancosimple.backend.features.frequent_account.model.FrequentAccount;

public class FrequentAccountMapper {
    public static FrequentAccountDTO toDTO(FrequentAccount fa) {
        return new FrequentAccountDTO(
                fa.getId(),
                fa.getUserId(),
                fa.getType(),
                fa.getCategory(),
                fa.getBankName(),
                fa.getAccountNumber(),
                fa.getHolderName(),
                fa.getRut(),
                fa.getAlias(),
                fa.getAddedDate(),
                fa.getFavorite()
        );
    }

    public static FrequentAccount toEntity(FrequentAccountDTO dto) {
        return FrequentAccount.builder()
                .id(dto.id())
                .userId(dto.userId())
                .type(dto.type())
                .category(dto.category())
                .bankName(dto.bankName())
                .accountNumber(dto.accountNumber())
                .holderName(dto.holderName())
                .rut(dto.rut())
                .alias(dto.alias())
                .addedDate(dto.addedDate())
                .favorite(dto.favorite())
                .build();
    }
}
