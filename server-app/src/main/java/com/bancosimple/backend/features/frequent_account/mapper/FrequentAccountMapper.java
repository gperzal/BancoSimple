package com.bancosimple.backend.features.frequent_account.mapper;

import com.bancosimple.backend.features.frequent_account.dto.FrequentAccountDTO;
import com.bancosimple.backend.features.frequent_account.model.FrequentAccount;

public class FrequentAccountMapper {

    public static FrequentAccountDTO toDTO(FrequentAccount fa) {
        return new FrequentAccountDTO(
                fa.getId(),
                fa.getUserId(),
                fa.getFavoriteProductId(),
                fa.getAlias(),
                fa.getAddedDate(),
                fa.getActive()
        );
    }

    public static FrequentAccount toEntity(FrequentAccountDTO dto) {
        return FrequentAccount.builder()
                .id(dto.id())
                .userId(dto.userId())
                .favoriteProductId(dto.favoriteProductId())
                .alias(dto.alias())
                .addedDate(dto.addedDate())
                .active(dto.active())
                .build();
    }
}
