package com.bancosimple.backend.features.transaction.service;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.features.transaction.dto.TransactionDTO;
import com.bancosimple.backend.features.transaction.mapper.TransactionMapper;
import com.bancosimple.backend.features.transaction.model.Transaction;
import com.bancosimple.backend.features.transaction.repository.TransactionRepository;
import com.bancosimple.backend.features.user_product.model.UserProduct;
import com.bancosimple.backend.features.user_product.repository.UserProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionService {

    private final TransactionRepository transactionRepository;
    private final UserProductRepository userProductRepository;

    @Override
    public List<TransactionDTO> findAll(Long referenceProductId) {
        return transactionRepository.findAll().stream()
                .map(transaction -> TransactionMapper.toDTO(transaction, referenceProductId))
                .toList();
    }

    @Override
    public TransactionDTO findById(Long id) {
        return transactionRepository.findById(id)
                .map(transaction -> TransactionMapper.toDTO(transaction, null))
                .orElseThrow(() -> new ApiException("Transaction not found with id: " + id));
    }

    @Override
    public TransactionDTO performTransfer(TransactionDTO dto) {
        UserProduct origin = userProductRepository.findById(dto.originProductId())
                .orElseThrow(() -> new ApiException("Origin user product not found"));
        UserProduct destination = userProductRepository.findById(dto.destinationProductId())
                .orElseThrow(() -> new ApiException("Destination user product not found"));

        if (origin.getBalance().compareTo(dto.amount()) < 0) {
            throw new ApiException("Insufficient balance for transaction");
        }

        origin.setBalance(origin.getBalance().subtract(dto.amount()));
        destination.setBalance(destination.getBalance().add(dto.amount()));

        userProductRepository.save(origin);
        userProductRepository.save(destination);

        Transaction transaction = Transaction.builder()
                .originProductId(origin.getId())
                .destinationProductId(destination.getId())
                .amount(dto.amount())
                .currency(dto.currency())
                .description(dto.description())
                .category(dto.category())
                .externalReference(dto.externalReference())
                .statusId(1) // Estado Activo por defecto
                .date(LocalDateTime.now())
                .build();

        return TransactionMapper.toDTO(transactionRepository.save(transaction), null);
    }

    @Override
    public void deleteById(Long id) {
        transactionRepository.deleteById(id);
    }

    @Override
    public List<TransactionDTO> filterTransactions(Long referenceProductId, String type, LocalDate from, LocalDate to, String description) {
        return transactionRepository.findAll().stream()
                .filter(transaction -> {
                    boolean matchesType = true;
                    if (type != null) {
                        if ("received".equalsIgnoreCase(type)) {
                            matchesType = transaction.getDestinationProductId().equals(referenceProductId);
                        } else if ("sent".equalsIgnoreCase(type)) {
                            matchesType = transaction.getOriginProductId().equals(referenceProductId);
                        }
                    }
                    boolean matchesDate = true;
                    if (from != null) {
                        matchesDate = transaction.getDate().toLocalDate().isEqual(from) || transaction.getDate().toLocalDate().isAfter(from);
                    }
                    if (to != null) {
                        matchesDate = matchesDate && (transaction.getDate().toLocalDate().isEqual(to) || transaction.getDate().toLocalDate().isBefore(to));
                    }
                    boolean matchesDescription = description == null || (transaction.getDescription() != null && transaction.getDescription().toLowerCase().contains(description.toLowerCase()));
                    return matchesType && matchesDate && matchesDescription;
                })
                .map(transaction -> TransactionMapper.toDTO(transaction, referenceProductId))
                .toList();
    }
}
