package com.bancosimple.backend.rol_usuario.mapper;

import com.bancosimple.backend.rol_usuario.dto.RolUsuarioDTO;
import com.bancosimple.backend.rol_usuario.model.RolUsuario;

public class RolUsuarioMapper {
    public static RolUsuarioDTO toDTO(RolUsuario entity) {
        return new RolUsuarioDTO(
                entity.getId(),
                entity.getUsuarioId(),
                entity.getRolId(),
                entity.getFechaRegistro()
        );
    }

    public static RolUsuario toEntity(RolUsuarioDTO dto) {
        return new RolUsuario(
                dto.getId(),
                dto.getUsuarioId(),
                dto.getRolId(),
                dto.getFechaRegistro()
        );
    }
}
