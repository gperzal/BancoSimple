package com.bancosimple.backend.rol.mapper;

import com.bancosimple.backend.rol.dto.RolDTO;
import com.bancosimple.backend.rol.model.Rol;

public class RolMapper {
    public static RolDTO toDTO(Rol entity) {
        return new RolDTO(entity.getId(), entity.getNombre(), entity.getDescripcion());
    }

    public static Rol toEntity(RolDTO dto) {
        return new Rol(dto.getId(), dto.getNombre(), dto.getDescripcion());
    }
}
