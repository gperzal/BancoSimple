package com.bancosimple.backend.log_actividad.mapper;

import com.bancosimple.backend.log_actividad.dto.LogActividadDTO;
import com.bancosimple.backend.log_actividad.model.LogActividad;

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
