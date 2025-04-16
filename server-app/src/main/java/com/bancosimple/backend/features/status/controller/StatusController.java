package com.bancosimple.backend.features.status.controller;

import com.bancosimple.backend.features.status.dto.StatusDTO;
import com.bancosimple.backend.features.status.service.StatusService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/statuses")
public class StatusController {

    private final StatusService statusService;

    @GetMapping
    public ResponseEntity<List<StatusDTO>> findAll() {
        return ResponseEntity.ok(statusService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<StatusDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(statusService.findById(id));
    }

    @PostMapping
    public ResponseEntity<StatusDTO> save(@RequestBody StatusDTO dto) {
        return ResponseEntity.ok(statusService.save(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<StatusDTO> update(@PathVariable Long id, @RequestBody StatusDTO dto) {
        return ResponseEntity.ok(statusService.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        statusService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
