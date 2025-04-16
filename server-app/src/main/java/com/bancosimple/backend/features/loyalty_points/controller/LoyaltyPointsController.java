package com.bancosimple.backend.features.loyalty_points.controller;

import com.bancosimple.backend.features.loyalty_points.dto.LoyaltyPointsDTO;
import com.bancosimple.backend.features.loyalty_points.service.LoyaltyPointsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/loyalty-points")
@RequiredArgsConstructor
public class LoyaltyPointsController {

    private final LoyaltyPointsService loyaltyPointsService;

    @GetMapping
    public ResponseEntity<List<LoyaltyPointsDTO>> getAll() {
        return ResponseEntity.ok(loyaltyPointsService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<LoyaltyPointsDTO> getById(@PathVariable Long id) {
        return ResponseEntity.ok(loyaltyPointsService.findById(id));
    }

    @PostMapping
    public ResponseEntity<LoyaltyPointsDTO> create(@RequestBody LoyaltyPointsDTO dto) {
        return ResponseEntity.ok(loyaltyPointsService.save(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<LoyaltyPointsDTO> update(@PathVariable Long id, @RequestBody LoyaltyPointsDTO dto) {
        return ResponseEntity.ok(loyaltyPointsService.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        loyaltyPointsService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
