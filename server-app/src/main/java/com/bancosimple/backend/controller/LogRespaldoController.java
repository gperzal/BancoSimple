package com.bancosimple.backend.controller;

import com.bancosimple.backend.dto.LogRespaldoDTO;
import com.bancosimple.backend.mapper.LogRespaldoMapper;
import com.bancosimple.backend.model.LogRespaldo;
import com.bancosimple.backend.service.LogRespaldoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/logs-respaldo")
public class LogRespaldoController {

    private final LogRespaldoService service;

    public LogRespaldoController(LogRespaldoService service) {
        this.service = service;
    }

    @GetMapping
    public List<LogRespaldoDTO> getAll() {
        return service.findAll().stream().map(LogRespaldoMapper::toDTO).toList();
    }

    @PostMapping
    public LogRespaldoDTO create(@RequestBody LogRespaldoDTO dto) {
        LogRespaldo saved = service.save(LogRespaldoMapper.toEntity(dto));
        return LogRespaldoMapper.toDTO(saved);
    }
}
