package com.bancosimple.backend.puntos_fidelizacion.mapper;

import com.bancosimple.backend.puntos_fidelizacion.dto.PuntosFidelizacionDTO;
import com.bancosimple.backend.puntos_fidelizacion.model.PuntosFidelizacion;

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
