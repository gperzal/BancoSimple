package com.bancosimple.backend.mapper;

import com.bancosimple.backend.dto.PuntosFidelizacionDTO;
import com.bancosimple.backend.model.PuntosFidelizacion;

public class PuntosFidelizacionMapper {

    public static PuntosFidelizacionDTO toDTO(PuntosFidelizacion entity) {
        return new PuntosFidelizacionDTO(
                entity.getId(),
                entity.getUsuarioId(),
                entity.getPuntosAcumulados(),
                entity.getPuntosUtilizados(),
                entity.getFechaActualizacion()
        );
    }

    public static PuntosFidelizacion toEntity(PuntosFidelizacionDTO dto) {
        return new PuntosFidelizacion(
                dto.getId(),
                dto.getUsuarioId(),
                dto.getPuntosAcumulados(),
                dto.getPuntosUtilizados(),
                dto.getFechaActualizacion()
        );
    }
}
