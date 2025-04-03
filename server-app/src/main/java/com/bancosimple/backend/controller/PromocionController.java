package com.bancosimple.backend.controller;

import com.bancosimple.backend.dto.PromocionDTO;
import com.bancosimple.backend.mapper.PromocionMapper;
import com.bancosimple.backend.model.Promocion;
import com.bancosimple.backend.service.PromocionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/promociones")
public class PromocionController {

    private final PromocionService service;

    public PromocionController(PromocionService service) {
        this.service = service;
    }

    @GetMapping
    public List<PromocionDTO> getAll() {
        return service.findAll().stream().map(PromocionMapper::toDTO).toList();
    }

    @PostMapping
    public PromocionDTO create(@RequestBody PromocionDTO dto) {
        Promocion saved = service.save(PromocionMapper.toEntity(dto));
        return PromocionMapper.toDTO(saved);
    }
}
