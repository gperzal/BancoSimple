package com.bancosimple.backend.features.backup_log.controller;

import com.bancosimple.backend.features.backup_log.dto.BackupLogDTO;
import com.bancosimple.backend.features.backup_log.service.BackupLogService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/backup-logs")
public class BackupLogController {

    private final BackupLogService service;

    @GetMapping
    public ResponseEntity<List<BackupLogDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BackupLogDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<BackupLogDTO> save(@RequestBody BackupLogDTO dto) {
        return ResponseEntity.ok(service.save(dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
