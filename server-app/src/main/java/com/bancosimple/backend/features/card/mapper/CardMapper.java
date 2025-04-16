package com.bancosimple.backend.features.card.mapper;

import com.bancosimple.backend.features.card.dto.CardDTO;
import com.bancosimple.backend.features.card.model.Card;

public class CardMapper {
    public static CardDTO toDTO(Card card) {
        return new CardDTO(
                card.getId(),
                card.getProductId(),
                card.getCardType(),
                card.getCardNumber(),
                card.getCvv(),
                card.getPinHash(),
                card.getExpirationDate(),
                card.getPrintedName(),
                card.getActive(),
                card.getStateId(),
                card.getIssuedAt()
        );
    }

    public static Card toEntity(CardDTO dto) {
        return Card.builder()
                .id(dto.id())
                .productId(dto.productId())
                .cardType(dto.cardType())
                .cardNumber(dto.cardNumber())
                .cvv(dto.cvv())
                .pinHash(dto.pinHash())
                .expirationDate(dto.expirationDate())
                .printedName(dto.printedName())
                .active(dto.active())
                .stateId(dto.stateId())
                .issuedAt(dto.issuedAt())
                .build();
    }
}
