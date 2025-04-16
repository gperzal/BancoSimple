package com.bancosimple.backend.features.card.controller;

import com.bancosimple.backend.features.card.dto.CardDTO;
import com.bancosimple.backend.features.card.service.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cards")
@RequiredArgsConstructor
public class CardController {

    private final CardService cardService;

    @GetMapping
    public ResponseEntity<List<CardDTO>> findAll() {
        return ResponseEntity.ok(cardService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CardDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(cardService.findById(id));
    }

    @PostMapping
    public ResponseEntity<CardDTO> create(@RequestBody CardDTO dto) {
        return ResponseEntity.ok(cardService.save(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CardDTO> update(@PathVariable Long id, @RequestBody CardDTO dto) {
        return ResponseEntity.ok(cardService.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        cardService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
