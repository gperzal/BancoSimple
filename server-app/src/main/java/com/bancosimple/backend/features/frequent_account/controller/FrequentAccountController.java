package com.bancosimple.backend.features.frequent_account.controller;

import com.bancosimple.backend.features.frequent_account.dto.FrequentAccountDTO;
import com.bancosimple.backend.features.frequent_account.model.AccountCategory;
import com.bancosimple.backend.features.frequent_account.model.BankName;
import com.bancosimple.backend.features.frequent_account.service.FrequentAccountService;
import com.bancosimple.backend.security.model.CustomUserDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/frequent-accounts")
public class FrequentAccountController {
    private final FrequentAccountService service;

    @GetMapping("/me")
    public ResponseEntity<List<FrequentAccountDTO>> myAccounts(
            @AuthenticationPrincipal CustomUserDetails userDetails
    ) {
        return ResponseEntity.ok(
                service.findByUserId(userDetails.getUser().getId())
        );
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
                        .map(bank -> bank.name().replace("_", " ").toLowerCase())
                        .map(name -> Arrays.stream(name.split(" "))
                                .map(w -> w.substring(0, 1).toUpperCase() + w.substring(1))
                                .collect(Collectors.joining(" "))
                        )
                        .collect(Collectors.toList())
        );
    }

    @GetMapping("/categories")
    public ResponseEntity<List<String>> listCategories() {
        return ResponseEntity.ok(
                Arrays.stream(AccountCategory.values())
                        .map(Enum::name)
                        .toList()
        );
    }
}