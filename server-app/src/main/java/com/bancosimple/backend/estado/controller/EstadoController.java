package com.bancosimple.backend.estado.controller;

import com.bancosimple.backend.estado.dto.EstadoDTO;
import com.bancosimple.backend.estado.mapper.EstadoMapper;
import com.bancosimple.backend.estado.model.Estado;
import com.bancosimple.backend.estado.service.EstadoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/estados")
public class EstadoController {

    private final EstadoService estadoService;

    public EstadoController(EstadoService estadoService) {
        this.estadoService = estadoService;
    }

    @GetMapping
    public List<EstadoDTO> getAll() {
        return estadoService.findAll().stream()
                .map(EstadoMapper::toDTO)
                .toList();
    }

    @GetMapping("/{id}")
    public EstadoDTO getById(@PathVariable Long id) {
        Estado estado = estadoService.findById(id)
                .orElseThrow(() -> new RuntimeException("Estado no encontrado"));
        return EstadoMapper.toDTO(estado);
    }

    @PostMapping
    public EstadoDTO create(@RequestBody EstadoDTO dto) {
        Estado saved = estadoService.save(EstadoMapper.toEntity(dto));
        return EstadoMapper.toDTO(saved);
    }

    @PutMapping("/{id}")
    public EstadoDTO update(@PathVariable Long id, @RequestBody EstadoDTO dto) {
        dto.setId(id);
        Estado updated = estadoService.save(EstadoMapper.toEntity(dto));
        return EstadoMapper.toDTO(updated);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        estadoService.deleteById(id);
    }
}
