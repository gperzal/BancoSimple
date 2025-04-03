package com.bancosimple.backend.mapper;

import com.bancosimple.backend.dto.PromocionUsuarioDTO;
import com.bancosimple.backend.model.PromocionUsuario;

public class PromocionUsuarioMapper {

    public static PromocionUsuarioDTO toDTO(PromocionUsuario entity) {
        return new PromocionUsuarioDTO(
                entity.getId(),
                entity.getUsuarioId(),
                entity.getPromocionId(),
                entity.getProductoId(),
                entity.getTransaccionId(),
                entity.getTipoAplicacion(),
                entity.getMontoAplicado(),
                entity.getFechaAplicacion()
        );
    }

    public static PromocionUsuario toEntity(PromocionUsuarioDTO dto) {
        return new PromocionUsuario(
                dto.getId(),
                dto.getUsuarioId(),
                dto.getPromocionId(),
                dto.getProductoId(),
                dto.getTransaccionId(),
                dto.getTipoAplicacion(),
                dto.getMontoAplicado(),
                dto.getFechaAplicacion()
        );
    }
}
