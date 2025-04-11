package com.bancosimple.backend.estado.mapper;

import com.bancosimple.backend.estado.dto.EstadoDTO;
import com.bancosimple.backend.estado.model.Estado;

public class EstadoMapper {

    public static EstadoDTO toDTO(Estado estado) {
        return new EstadoDTO(
                estado.getId(),
                estado.getCodigo(),
                estado.getDescripcion()
        );
    }

    public static Estado toEntity(EstadoDTO dto) {
        return new Estado(
                dto.getId(),
                dto.getCodigo(),
                dto.getDescripcion()
        );
    }
}
