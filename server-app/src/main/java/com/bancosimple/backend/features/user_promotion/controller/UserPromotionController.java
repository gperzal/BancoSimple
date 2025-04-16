package com.bancosimple.backend.features.user_promotion.controller;

import com.bancosimple.backend.features.user_promotion.dto.UserPromotionDTO;
import com.bancosimple.backend.features.user_promotion.service.UserPromotionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user-promotions")
public class UserPromotionController {

    private final UserPromotionService service;

    @GetMapping
    public ResponseEntity<List<UserPromotionDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserPromotionDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<UserPromotionDTO> save(@RequestBody UserPromotionDTO dto) {
        return ResponseEntity.ok(service.save(dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
