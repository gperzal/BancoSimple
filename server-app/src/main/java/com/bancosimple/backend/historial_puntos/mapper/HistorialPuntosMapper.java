package com.bancosimple.backend.historial_puntos.mapper;

import com.bancosimple.backend.historial_puntos.dto.HistorialPuntosDTO;
import com.bancosimple.backend.historial_puntos.model.HistorialPuntos;

public class HistorialPuntosMapper {

    public static HistorialPuntosDTO toDTO(HistorialPuntos entity) {
        return new HistorialPuntosDTO(
                entity.getId(),
                entity.getUsuarioId(),
                entity.getTipoOperacion(),
                entity.getPuntos(),
                entity.getDescripcion(),
                entity.getFecha()
        );
    }

    public static HistorialPuntos toEntity(HistorialPuntosDTO dto) {
        return new HistorialPuntos(
                dto.getId(),
                dto.getUsuarioId(),
                dto.getTipoOperacion(),
                dto.getPuntos(),
                dto.getDescripcion(),
                dto.getFecha()
        );
    }
}
