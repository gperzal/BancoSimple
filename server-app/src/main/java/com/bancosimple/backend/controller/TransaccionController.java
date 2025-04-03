package com.bancosimple.backend.controller;

import com.bancosimple.backend.dto.TransaccionDTO;
import com.bancosimple.backend.mapper.TransaccionMapper;
import com.bancosimple.backend.model.Transaccion;
import com.bancosimple.backend.service.TransaccionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transacciones")
public class TransaccionController {

    private final TransaccionService transaccionService;

    public TransaccionController(TransaccionService transaccionService) {
        this.transaccionService = transaccionService;
    }

    @GetMapping
    public List<TransaccionDTO> getAll() {
        return transaccionService.findAll().stream()
                .map(TransaccionMapper::toDTO)
                .toList();
    }

    @GetMapping("/{id}")
    public TransaccionDTO getById(@PathVariable Long id) {
        Transaccion transaccion = transaccionService.findById(id)
                .orElseThrow(() -> new RuntimeException("Transacción no encontrada"));
        return TransaccionMapper.toDTO(transaccion);
    }

    @PostMapping
    public TransaccionDTO create(@RequestBody TransaccionDTO dto) {
        Transaccion saved = transaccionService.save(TransaccionMapper.toEntity(dto));
        return TransaccionMapper.toDTO(saved);
    }

    @PutMapping("/{id}")
    public TransaccionDTO update(@PathVariable Long id, @RequestBody TransaccionDTO dto) {
        dto.setId(id);
        Transaccion updated = transaccionService.save(TransaccionMapper.toEntity(dto));
        return TransaccionMapper.toDTO(updated);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        transaccionService.deleteById(id);
    }
}
