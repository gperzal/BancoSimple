package com.bancosimple.backend.controller;

import com.bancosimple.backend.dto.RolUsuarioDTO;
import com.bancosimple.backend.mapper.RolUsuarioMapper;
import com.bancosimple.backend.model.RolUsuario;
import com.bancosimple.backend.service.RolUsuarioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roles-usuario")
public class RolUsuarioController {

    private final RolUsuarioService service;

    public RolUsuarioController(RolUsuarioService service) {
        this.service = service;
    }

    @GetMapping
    public List<RolUsuarioDTO> getAll() {
        return service.findAll().stream().map(RolUsuarioMapper::toDTO).toList();
    }

    @PostMapping
    public RolUsuarioDTO create(@RequestBody RolUsuarioDTO dto) {
        RolUsuario saved = service.save(RolUsuarioMapper.toEntity(dto));
        return RolUsuarioMapper.toDTO(saved);
    }
}
