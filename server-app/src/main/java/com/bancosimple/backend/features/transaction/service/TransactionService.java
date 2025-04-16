package com.bancosimple.backend.features.transaction.service;

import com.bancosimple.backend.features.transaction.dto.TransactionDTO;
import java.util.List;
import java.time.LocalDate;

public interface TransactionService {
    List<TransactionDTO> findAll(Long referenceProductId);
    List<TransactionDTO> filterTransactions(Long referenceProductId, String type, LocalDate from, LocalDate to, String description);
    TransactionDTO findById(Long id);
    TransactionDTO performTransfer(TransactionDTO dto);
    void deleteById(Long id);
}