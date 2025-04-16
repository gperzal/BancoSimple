package com.bancosimple.backend.features.status.mapper;

import com.bancosimple.backend.features.status.dto.StatusDTO;
import com.bancosimple.backend.features.status.model.Status;

public class StatusMapper {

    public static StatusDTO toDTO(Status s) {
        return new StatusDTO(s.getId(), s.getCode(), s.getDescription());
    }

    public static Status toEntity(StatusDTO dto) {
        return Status.builder()
                .id(dto.id())
                .code(dto.code())
                .description(dto.description())
                .build();
    }
}
