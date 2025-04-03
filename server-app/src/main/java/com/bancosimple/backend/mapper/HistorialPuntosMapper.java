package com.bancosimple.backend.mapper;

import com.bancosimple.backend.dto.HistorialPuntosDTO;
import com.bancosimple.backend.model.HistorialPuntos;

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
