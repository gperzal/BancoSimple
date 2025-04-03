package com.bancosimple.backend.mapper;

import com.bancosimple.backend.dto.TransaccionDTO;
import com.bancosimple.backend.model.Transaccion;

public class TransaccionMapper {

    public static TransaccionDTO toDTO(Transaccion entity) {
        return new TransaccionDTO(
                entity.getId(),
                entity.getProductoIdOrigen(),
                entity.getProductoIdDestino(),
                entity.getMonto(),
                entity.getMoneda(),
                entity.getDescripcion(),
                entity.getCategoria(),
                entity.getReferenciaExterna(),
                entity.getEstadoId(),
                entity.getFecha()
        );
    }

    public static Transaccion toEntity(TransaccionDTO dto) {
        return new Transaccion(
                dto.getId(),
                dto.getProductoIdOrigen(),
                dto.getProductoIdDestino(),
                dto.getMonto(),
                dto.getMoneda(),
                dto.getDescripcion(),
                dto.getCategoria(),
                dto.getReferenciaExterna(),
                dto.getEstadoId(),
                dto.getFecha()
        );
    }
}
