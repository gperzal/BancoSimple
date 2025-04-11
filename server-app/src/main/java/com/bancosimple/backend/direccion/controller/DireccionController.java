package com.bancosimple.backend.direccion.controller;

import com.bancosimple.backend.direccion.dto.DireccionDTO;
import com.bancosimple.backend.direccion.mapper.DireccionMapper;
import com.bancosimple.backend.direccion.model.Direccion;
import com.bancosimple.backend.direccion.service.DireccionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/direcciones")
public class DireccionController {

    private final DireccionService direccionService;

    public DireccionController(DireccionService direccionService) {
        this.direccionService = direccionService;
    }

    @GetMapping
    public List<DireccionDTO> getAll() {
        return direccionService.findAll().stream()
                .map(DireccionMapper::toDTO)
                .toList();
    }

    @GetMapping("/{id}")
    public DireccionDTO getById(@PathVariable Long id) {
        Direccion direccion = direccionService.findById(id)
                .orElseThrow(() -> new RuntimeException("Dirección no encontrada"));
        return DireccionMapper.toDTO(direccion);
    }

    @PostMapping
    public DireccionDTO create(@RequestBody DireccionDTO dto) {
        Direccion saved = direccionService.save(DireccionMapper.toEntity(dto));
        return DireccionMapper.toDTO(saved);
    }

    @PutMapping("/{id}")
    public DireccionDTO update(@PathVariable Long id, @RequestBody DireccionDTO dto) {
        dto.setId(id);
        Direccion updated = direccionService.save(DireccionMapper.toEntity(dto));
        return DireccionMapper.toDTO(updated);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        direccionService.deleteById(id);
    }
}
