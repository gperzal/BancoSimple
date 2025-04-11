package com.bancosimple.backend.historial_puntos.controller;

import com.bancosimple.backend.historial_puntos.dto.HistorialPuntosDTO;
import com.bancosimple.backend.historial_puntos.mapper.HistorialPuntosMapper;
import com.bancosimple.backend.historial_puntos.model.HistorialPuntos;
import com.bancosimple.backend.historial_puntos.service.HistorialPuntosService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/historial-puntos")
public class HistorialPuntosController {

    private final HistorialPuntosService service;

    public HistorialPuntosController(HistorialPuntosService service) {
        this.service = service;
    }

    @GetMapping
    public List<HistorialPuntosDTO> getAll() {
        return service.findAll().stream().map(HistorialPuntosMapper::toDTO).toList();
    }

    @PostMapping
    public HistorialPuntosDTO create(@RequestBody HistorialPuntosDTO dto) {
        HistorialPuntos saved = service.save(HistorialPuntosMapper.toEntity(dto));
        return HistorialPuntosMapper.toDTO(saved);
    }
}
