package com.bancosimple.backend.features.transaction.mapper;

import com.bancosimple.backend.features.transaction.dto.TransactionDTO;
import com.bancosimple.backend.features.transaction.model.Transaction;

public class TransactionMapper {

    public static TransactionDTO toDTO(Transaction t, Long referenceProductId) {
        String operationType = null;
        if (referenceProductId != null) {
            operationType = t.getOriginProductId().equals(referenceProductId) ? "sent" : "received";
        }

        return new TransactionDTO(
                t.getId(),
                t.getOriginProductId(),
                t.getDestinationProductId(),
                t.getAmount(),
                t.getCurrency(),
                t.getDescription(),
                t.getCategory(),
                t.getExternalReference(),
                t.getStatusId(),
                t.getDate(),
                operationType
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
