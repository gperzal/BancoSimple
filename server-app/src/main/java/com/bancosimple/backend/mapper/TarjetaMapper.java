package com.bancosimple.backend.mapper;

import com.bancosimple.backend.dto.TarjetaDTO;
import com.bancosimple.backend.model.Tarjeta;

public class TarjetaMapper {

    public static TarjetaDTO toDTO(Tarjeta entity) {
        return new TarjetaDTO(
                entity.getId(),
                entity.getProductoId(),
                entity.getTipoTarjeta(),
                entity.getNumeroTarjeta(),
                entity.getCvv(),
                entity.getPinHash(),
                entity.getFechaExpiracion(),
                entity.getNombreImpreso(),
                entity.getActiva(),
                entity.getEstadoId(),
                entity.getEmitida()
        );
    }

    public static Tarjeta toEntity(TarjetaDTO dto) {
        return new Tarjeta(
                dto.getId(),
                dto.getProductoId(),
                dto.getTipoTarjeta(),
                dto.getNumeroTarjeta(),
                dto.getCvv(),
                dto.getPinHash(),
                dto.getFechaExpiracion(),
                dto.getNombreImpreso(),
                dto.getActiva(),
                dto.getEstadoId(),
                dto.getEmitida()
        );
    }
}
