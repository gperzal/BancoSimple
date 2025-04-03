package com.bancosimple.backend.mapper;

import com.bancosimple.backend.dto.DireccionDTO;
import com.bancosimple.backend.model.Direccion;

public class DireccionMapper {

    public static DireccionDTO toDTO(Direccion entity) {
        return new DireccionDTO(
                entity.getId(),
                entity.getUsuarioId(),
                entity.getTipoDireccion(),
                entity.getCalle(),
                entity.getNumero(),
                entity.getComuna(),
                entity.getCiudad(),
                entity.getRegion(),
                entity.getCodigoPostal(),
                entity.getPais(),
                entity.getActiva(),
                entity.getFechaCreacion()
        );
    }

    public static Direccion toEntity(DireccionDTO dto) {
        return new Direccion(
                dto.getId(),
                dto.getUsuarioId(),
                dto.getTipoDireccion(),
                dto.getCalle(),
                dto.getNumero(),
                dto.getComuna(),
                dto.getCiudad(),
                dto.getRegion(),
                dto.getCodigoPostal(),
                dto.getPais(),
                dto.getActiva(),
                dto.getFechaCreacion()
        );
    }
}
