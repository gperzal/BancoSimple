package com.bancosimple.backend.controller;

import com.bancosimple.backend.dto.PromocionUsuarioDTO;
import com.bancosimple.backend.mapper.PromocionUsuarioMapper;
import com.bancosimple.backend.model.PromocionUsuario;
import com.bancosimple.backend.service.PromocionUsuarioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/promociones-usuarios")
public class PromocionUsuarioController {

    private final PromocionUsuarioService service;

    public PromocionUsuarioController(PromocionUsuarioService service) {
        this.service = service;
    }

    @GetMapping
    public List<PromocionUsuarioDTO> getAll() {
        return service.findAll().stream().map(PromocionUsuarioMapper::toDTO).toList();
    }

    @PostMapping
    public PromocionUsuarioDTO create(@RequestBody PromocionUsuarioDTO dto) {
        PromocionUsuario saved = service.save(PromocionUsuarioMapper.toEntity(dto));
        return PromocionUsuarioMapper.toDTO(saved);
    }
}
