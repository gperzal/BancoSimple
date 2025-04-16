package com.bancosimple.backend.features.transaction.service;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.features.product.model.Product;
import com.bancosimple.backend.features.product.repository.ProductRepository;
import com.bancosimple.backend.features.transaction.dto.TransactionDTO;
import com.bancosimple.backend.features.transaction.mapper.TransactionMapper;
import com.bancosimple.backend.features.transaction.model.Transaction;
import com.bancosimple.backend.features.transaction.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionService {

    private final TransactionRepository transactionRepository;
    private final ProductRepository productRepository;

    @Override
    public List<TransactionDTO> findAll(Long referenceProductId) {
        return transactionRepository.findAll().stream()
                .map(t -> TransactionMapper.toDTO(t, referenceProductId))
                .toList();
    }

    @Override
    public TransactionDTO findById(Long id) {
        return transactionRepository.findById(id)
                .map(t -> TransactionMapper.toDTO(t, null))
                .orElseThrow(() -> new ApiException("Transaction not found with ID: " + id));
    }

    @Override
    @Transactional
    public TransactionDTO performTransfer(TransactionDTO dto) {
        Product origin = productRepository.findById(dto.originProductId())
                .orElseThrow(() -> new ApiException("Origin product not found"));

        Product destination = productRepository.findById(dto.destinationProductId())
                .orElseThrow(() -> new ApiException("Destination product not found"));

        if (dto.amount().compareTo(BigDecimal.ZERO) <= 0) {
            throw new ApiException("Amount must be greater than 0");
        }

        if (origin.getBalance().compareTo(dto.amount()) < 0) {
            throw new ApiException("Insufficient balance in origin product");
        }

        origin.setBalance(origin.getBalance().subtract(dto.amount()));
        destination.setBalance(destination.getBalance().add(dto.amount()));

        productRepository.save(origin);
        productRepository.save(destination);

        Transaction transaction = TransactionMapper.toEntity(dto);
        Transaction saved = transactionRepository.save(transaction);
        return TransactionMapper.toDTO(saved, dto.originProductId());
    }

    @Override
    public void deleteById(Long id) {
        if (!transactionRepository.existsById(id)) {
            throw new ApiException("Transaction not found with ID: " + id);
        }
        transactionRepository.deleteById(id);
    }

    @Override
    public List<TransactionDTO> filterTransactions(Long referenceProductId, String type, LocalDate from, LocalDate to, String description) {
        return transactionRepository.findAll().stream()
                .filter(t -> referenceProductId == null ||
                        t.getOriginProductId().equals(referenceProductId) ||
                        t.getDestinationProductId().equals(referenceProductId))
                .filter(t -> type == null || type.equalsIgnoreCase("all")
                        || (type.equalsIgnoreCase("sent") && t.getOriginProductId().equals(referenceProductId))
                        || (type.equalsIgnoreCase("received") && t.getDestinationProductId().equals(referenceProductId)))
                .filter(t -> from == null || !t.getDate().toLocalDate().isBefore(from))
                .filter(t -> to == null || !t.getDate().toLocalDate().isAfter(to))
                .filter(t -> description == null || t.getDescription().toLowerCase().contains(description.toLowerCase()))
                .map(t -> TransactionMapper.toDTO(t, referenceProductId))
                .toList();
    }
}
