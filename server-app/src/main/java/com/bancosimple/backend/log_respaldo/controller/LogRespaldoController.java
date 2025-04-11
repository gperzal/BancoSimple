package com.bancosimple.backend.log_respaldo.log_respaldo.controller;

import com.bancosimple.backend.log_respaldo.dto.LogRespaldoDTO;
import com.bancosimple.backend.log_respaldo.mapper.LogRespaldoMapper;
import com.bancosimple.backend.log_respaldo.model.LogRespaldo;
import com.bancosimple.backend.log_respaldo.service.LogRespaldoService;
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
