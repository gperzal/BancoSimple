package com.bancosimple.backend.mapper;

import com.bancosimple.backend.dto.EstadoDTO;
import com.bancosimple.backend.model.Estado;

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
