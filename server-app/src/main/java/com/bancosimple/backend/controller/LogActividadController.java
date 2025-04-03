package com.bancosimple.backend.controller;

import com.bancosimple.backend.dto.LogActividadDTO;
import com.bancosimple.backend.mapper.LogActividadMapper;
import com.bancosimple.backend.model.LogActividad;
import com.bancosimple.backend.service.LogActividadService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/logs-actividad")
public class LogActividadController {

    private final LogActividadService service;

    public LogActividadController(LogActividadService service) {
        this.service = service;
    }

    @GetMapping
    public List<LogActividadDTO> getAll() {
        return service.findAll().stream().map(LogActividadMapper::toDTO).toList();
    }

    @PostMapping
    public LogActividadDTO create(@RequestBody LogActividadDTO dto) {
        LogActividad saved = service.save(LogActividadMapper.toEntity(dto));
        return LogActividadMapper.toDTO(saved);
    }
}
