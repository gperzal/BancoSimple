package com.bancosimple.backend.features.points_history.controller;

import com.bancosimple.backend.features.points_history.dto.PointsHistoryDTO;
import com.bancosimple.backend.features.points_history.service.PointsHistoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/points-history")
public class PointsHistoryController {

    private final PointsHistoryService service;

    @GetMapping
    public ResponseEntity<List<PointsHistoryDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PointsHistoryDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<PointsHistoryDTO> save(@RequestBody PointsHistoryDTO dto) {
        return ResponseEntity.ok(service.save(dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
