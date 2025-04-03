package com.bancosimple.backend.mapper;

import com.bancosimple.backend.dto.PromocionDTO;
import com.bancosimple.backend.model.Promocion;

public class PromocionMapper {

    public static PromocionDTO toDTO(Promocion entity) {
        return new PromocionDTO(
                entity.getId(),
                entity.getNombre(),
                entity.getDescripcion(),
                entity.getTipo(),
                entity.getPorcentaje(),
                entity.getTopeMonto(),
                entity.getDiasSemana(),
                entity.getComercio(),
                entity.getFechaInicio(),
                entity.getFechaFin(),
                entity.getActiva()
        );
    }

    public static Promocion toEntity(PromocionDTO dto) {
        return new Promocion(
                dto.getId(),
                dto.getNombre(),
                dto.getDescripcion(),
                dto.getTipo(),
                dto.getPorcentaje(),
                dto.getTopeMonto(),
                dto.getDiasSemana(),
                dto.getComercio(),
                dto.getFechaInicio(),
                dto.getFechaFin(),
                dto.getActiva()
        );
    }
}
