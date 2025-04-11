package com.bancosimple.backend.puntos_fidelizacion.controller;


import com.bancosimple.backend.puntos_fidelizacion.dto.PuntosFidelizacionDTO;
import com.bancosimple.backend.puntos_fidelizacion.mapper.PuntosFidelizacionMapper;
import com.bancosimple.backend.puntos_fidelizacion.model.PuntosFidelizacion;
import com.bancosimple.backend.puntos_fidelizacion.service.PuntosFidelizacionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/puntos")
public class PuntosFidelizacionController {

    private final PuntosFidelizacionService service;

    public PuntosFidelizacionController(PuntosFidelizacionService service) {
        this.service = service;
    }

    @GetMapping
    public List<PuntosFidelizacionDTO> getAll() {
        return service.findAll().stream().map(PuntosFidelizacionMapper::toDTO).toList();
    }

    @PostMapping
    public PuntosFidelizacionDTO create(@RequestBody PuntosFidelizacionDTO dto) {
        PuntosFidelizacion saved = service.save(PuntosFidelizacionMapper.toEntity(dto));
        return PuntosFidelizacionMapper.toDTO(saved);
    }
}
