package com.bancosimple.backend.rol_usuario.controller;

import com.bancosimple.backend.rol_usuario.dto.RolUsuarioDTO;
import com.bancosimple.backend.rol_usuario.mapper.RolUsuarioMapper;
import com.bancosimple.backend.rol_usuario.model.RolUsuario;
import com.bancosimple.backend.rol_usuario.service.RolUsuarioService;
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
