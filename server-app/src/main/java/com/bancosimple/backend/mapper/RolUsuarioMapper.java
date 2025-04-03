package com.bancosimple.backend.mapper;

import com.bancosimple.backend.dto.RolUsuarioDTO;
import com.bancosimple.backend.model.RolUsuario;

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
