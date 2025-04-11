package com.bancosimple.backend.cuenta_frecuente.mapper;

import com.bancosimple.backend.cuenta_frecuente.dto.CuentaFrecuenteDTO;
import com.bancosimple.backend.cuenta_frecuente.model.CuentaFrecuente;

public class CuentaFrecuenteMapper {

    public static CuentaFrecuenteDTO toDTO(CuentaFrecuente entity) {
        return new CuentaFrecuenteDTO(
                entity.getId(),
                entity.getUsuarioId(),
                entity.getProductoFavoritoId(),
                entity.getAlias(),
                entity.getFechaAgregado(),
                entity.getActiva()
        );
    }

    public static CuentaFrecuente toEntity(CuentaFrecuenteDTO dto) {
        return new CuentaFrecuente(
                dto.getId(),
                dto.getUsuarioId(),
                dto.getProductoFavoritoId(),
                dto.getAlias(),
                dto.getFechaAgregado(),
                dto.getActiva()
        );
    }
}
