package com.bancosimple.backend.features.transaction.mapper;

import com.bancosimple.backend.features.transaction.dto.TransactionDTO;
import com.bancosimple.backend.features.transaction.model.Transaction;

public class TransactionMapper {

    public static TransactionDTO toDTO(Transaction transaction, Long referenceProductId) {
        boolean isIncome = referenceProductId != null && referenceProductId.equals(transaction.getDestinationProductId());

        return new TransactionDTO(
                transaction.getId(),
                transaction.getOriginProductId(),
                transaction.getDestinationProductId(),
                transaction.getAmount(),
                transaction.getCurrency(),
                transaction.getDescription(),
                transaction.getCategory(),
                transaction.getExternalReference(),
                transaction.getStatusId(),
                transaction.getDate(),
                isIncome ? "INCOME" : "OUTCOME"
        );
    }

    public static Transaction toEntity(TransactionDTO dto) {
        return Transaction.builder()
                .id(dto.id())
                .originProductId(dto.originProductId())
                .destinationProductId(dto.destinationProductId())
                .amount(dto.amount())
                .currency(dto.currency())
                .description(dto.description())
                .category(dto.category())
                .externalReference(dto.externalReference())
                .statusId(dto.statusId())
                .date(dto.date())
                .build();
    }
}
