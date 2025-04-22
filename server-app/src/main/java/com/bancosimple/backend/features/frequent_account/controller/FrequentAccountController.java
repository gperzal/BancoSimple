package com.bancosimple.backend.features.frequent_account.controller;

import com.bancosimple.backend.features.frequent_account.dto.FrequentAccountDTO;
import com.bancosimple.backend.features.frequent_account.model.BankName;
import com.bancosimple.backend.features.frequent_account.service.FrequentAccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/frequent-accounts")
public class FrequentAccountController {
    private final FrequentAccountService service;

    @GetMapping
    public ResponseEntity<List<FrequentAccountDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FrequentAccountDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<FrequentAccountDTO> save(@RequestBody FrequentAccountDTO dto) {
        return ResponseEntity.ok(service.save(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<FrequentAccountDTO> update(
            @PathVariable Long id,
            @RequestBody FrequentAccountDTO dto
    ) {
        return ResponseEntity.ok(service.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/banks")
    public ResponseEntity<List<String>> listBanks() {
        return ResponseEntity.ok(
                Arrays.stream(BankName.values())
                        .map(Enum::name)
                        .collect(Collectors.toList())
        );
    }
}