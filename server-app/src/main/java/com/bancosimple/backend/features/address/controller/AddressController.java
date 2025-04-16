package com.bancosimple.backend.features.address.controller;

import com.bancosimple.backend.features.address.dto.AddressDTO;
import com.bancosimple.backend.features.address.service.AddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/addresses")
public class AddressController {

    private final AddressService service;

    @GetMapping
    public ResponseEntity<List<AddressDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AddressDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<AddressDTO> save(@RequestBody AddressDTO dto) {
        return ResponseEntity.ok(service.save(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AddressDTO> update(@PathVariable Long id, @RequestBody AddressDTO dto) {
        return ResponseEntity.ok(service.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
