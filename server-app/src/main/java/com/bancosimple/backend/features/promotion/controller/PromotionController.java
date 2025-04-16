package com.bancosimple.backend.features.promotion.controller;

import com.bancosimple.backend.features.promotion.dto.PromotionDTO;
import com.bancosimple.backend.features.promotion.service.PromotionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/promotions")
public class PromotionController {

    private final PromotionService service;

    @GetMapping
    public ResponseEntity<List<PromotionDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PromotionDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<PromotionDTO> save(@RequestBody PromotionDTO dto) {
        return ResponseEntity.ok(service.save(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PromotionDTO> update(@PathVariable Long id, @RequestBody PromotionDTO dto) {
        return ResponseEntity.ok(service.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
