package com.bancosimple.backend.features.frequent_account.dto;

import com.bancosimple.backend.features.frequent_account.model.AccountCategory;
import com.bancosimple.backend.features.frequent_account.model.AccountType;
import com.bancosimple.backend.features.frequent_account.model.BankName;

import java.time.LocalDateTime;

public record FrequentAccountDTO(
        Long id,
        Long userId,
        AccountType type,
        AccountCategory category,
        BankName bankName,
        String accountNumber,
        String holderName,
        String rut,
        String alias,
        LocalDateTime addedDate,
        boolean favorite
) {}
