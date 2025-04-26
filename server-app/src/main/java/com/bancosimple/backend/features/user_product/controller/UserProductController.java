package com.bancosimple.backend.features.user_product.controller;

import com.bancosimple.backend.features.user_product.dto.UserProductDTO;
import com.bancosimple.backend.features.user_product.service.UserProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user-products")
@RequiredArgsConstructor
public class UserProductController {

    private final UserProductService service;

    @GetMapping
    public ResponseEntity<List<UserProductDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserProductDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<UserProductDTO> save(@RequestBody UserProductDTO dto) {
        return ResponseEntity.ok(service.save(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserProductDTO> update(@PathVariable Long id, @RequestBody UserProductDTO dto) {
        return ResponseEntity.ok(service.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
