package com.bancosimple.backend.promocion_usuario.controller;

import com.bancosimple.backend.promocion_usuario.dto.PromocionUsuarioDTO;
import com.bancosimple.backend.promocion_usuario.mapper.PromocionUsuarioMapper;
import com.bancosimple.backend.promocion_usuario.model.PromocionUsuario;
import com.bancosimple.backend.promocion_usuario.service.PromocionUsuarioService;
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
