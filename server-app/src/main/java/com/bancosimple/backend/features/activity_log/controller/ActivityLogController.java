package com.bancosimple.backend.features.activity_log.controller;

import com.bancosimple.backend.features.activity_log.dto.ActivityLogDTO;
import com.bancosimple.backend.features.activity_log.service.ActivityLogService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/activity-logs")
@RequiredArgsConstructor
public class ActivityLogController {

    private final ActivityLogService service;

    @GetMapping
    public ResponseEntity<List<ActivityLogDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ActivityLogDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<ActivityLogDTO> save(@RequestBody ActivityLogDTO dto) {
        return ResponseEntity.ok(service.save(dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
