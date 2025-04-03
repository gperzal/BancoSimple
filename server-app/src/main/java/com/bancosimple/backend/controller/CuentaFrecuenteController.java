package com.bancosimple.backend.controller;

import com.bancosimple.backend.dto.CuentaFrecuenteDTO;
import com.bancosimple.backend.mapper.CuentaFrecuenteMapper;
import com.bancosimple.backend.model.CuentaFrecuente;
import com.bancosimple.backend.service.CuentaFrecuenteService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cuentas-frecuentes")
public class CuentaFrecuenteController {

    private final CuentaFrecuenteService service;

    public CuentaFrecuenteController(CuentaFrecuenteService service) {
        this.service = service;
    }

    @GetMapping
    public List<CuentaFrecuenteDTO> getAll() {
        return service.findAll().stream().map(CuentaFrecuenteMapper::toDTO).toList();
    }

    @PostMapping
    public CuentaFrecuenteDTO create(@RequestBody CuentaFrecuenteDTO dto) {
        CuentaFrecuente saved = service.save(CuentaFrecuenteMapper.toEntity(dto));
        return CuentaFrecuenteMapper.toDTO(saved);
    }
}
