package com.bancosimple.backend.features.product.controller;

import com.bancosimple.backend.features.product.dto.ProductDTO;
import com.bancosimple.backend.features.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService service;

    @GetMapping
    public ResponseEntity<List<ProductDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<ProductDTO> save(@RequestBody ProductDTO dto) {
        return ResponseEntity.ok(service.save(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductDTO> update(@PathVariable Long id, @RequestBody ProductDTO dto) {
        return ResponseEntity.ok(service.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/request")
    public ResponseEntity<ProductDTO> requestProduct(@RequestBody ProductDTO dto) {
        return ResponseEntity.ok(service.requestProduct(dto));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<ProductDTO> updateStatus(@PathVariable Long id, @RequestParam Integer statusId) {
        return ResponseEntity.ok(service.updateStatus(id, statusId));
    }

}
