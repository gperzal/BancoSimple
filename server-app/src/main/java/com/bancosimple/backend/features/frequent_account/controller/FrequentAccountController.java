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


    @GetMapping("/")
    public ResponseEntity<List<FrequentAccountDTO>> allAccounts(
            @AuthenticationPrincipal CustomUserDetails userDetails
    ) {
        return ResponseEntity.ok(
                service.findAllByUserId(userDetails.getUser().getId())
        );
    }


    @GetMapping("/favorite")
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
    public ResponseEntity<FrequentAccountDTO> save(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestBody FrequentAccountDTO dto
    ) {
        Long currentUserId = userDetails.getUser().getId();

        FrequentAccountDTO enrichedDto = new FrequentAccountDTO(
                dto.id(),
                currentUserId,
                dto.type(),
                dto.category(),
                dto.bankName(),
                dto.accountNumber(),
                dto.holderName(),
                dto.rut(),
                dto.alias(),
                dto.addedDate(),
                dto.favorite()
        );

        return ResponseEntity.ok(service.save(enrichedDto));
    }


    @PutMapping("/{id}")
    public ResponseEntity<FrequentAccountDTO> update(
            @PathVariable Long id,
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestBody FrequentAccountDTO dto
    ) {
        Long currentUserId = userDetails.getUser().getId();

        FrequentAccountDTO enrichedDto = new FrequentAccountDTO(
                dto.id(),
                currentUserId,
                dto.type(),
                dto.category(),
                dto.bankName(),
                dto.accountNumber(),
                dto.holderName(),
                dto.rut(),
                dto.alias(),
                dto.addedDate(),
                dto.favorite()
        );

        return ResponseEntity.ok(service.update(id, enrichedDto));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(
            @PathVariable Long id,
            @AuthenticationPrincipal CustomUserDetails userDetails
    ) {
        service.deleteById(id, userDetails.getUser().getId());
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