package com.bancosimple.backend.features.transaction.controller;

import com.bancosimple.backend.features.transaction.dto.TransactionDTO;
import com.bancosimple.backend.features.transaction.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    private final TransactionService transactionService;

    @GetMapping
    public ResponseEntity<List<TransactionDTO>> findAll(
            @RequestParam(required = false) Long referenceProductId
    ) {
        return ResponseEntity.ok(transactionService.findAll(referenceProductId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<TransactionDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(transactionService.findById(id));
    }

    @PostMapping
    public ResponseEntity<TransactionDTO> create(@RequestBody TransactionDTO dto) {
        return ResponseEntity.ok(transactionService.performTransfer(dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        transactionService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/filter")
    public ResponseEntity<List<TransactionDTO>> filter(
            @RequestParam(required = false) Long referenceProductId,
            @RequestParam(required = false) String type, // sent, received, all
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to,
            @RequestParam(required = false) String description
    ) {
        return ResponseEntity.ok(
                transactionService.filterTransactions(referenceProductId, type, from, to, description)
        );
    }
}
