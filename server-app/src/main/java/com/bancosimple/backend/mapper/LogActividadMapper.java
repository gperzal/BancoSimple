package com.bancosimple.backend.mapper;

import com.bancosimple.backend.dto.LogActividadDTO;
import com.bancosimple.backend.model.LogActividad;

public class LogActividadMapper {

    public static LogActividadDTO toDTO(LogActividad entity) {
        return new LogActividadDTO(
                entity.getId(),
                entity.getUsuarioId(),
                entity.getAccion(),
                entity.getIpOrigen(),
                entity.getFecha(),
                entity.getDetalles()
        );
    }

    public static LogActividad toEntity(LogActividadDTO dto) {
        return new LogActividad(
                dto.getId(),
                dto.getUsuarioId(),
                dto.getAccion(),
                dto.getIpOrigen(),
                dto.getFecha(),
                dto.getDetalles()
        );
    }
}
