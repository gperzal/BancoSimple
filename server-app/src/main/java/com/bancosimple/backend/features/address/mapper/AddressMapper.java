package com.bancosimple.backend.features.address.mapper;

import com.bancosimple.backend.features.address.dto.AddressDTO;
import com.bancosimple.backend.features.address.model.Address;

public class AddressMapper {

    public static AddressDTO toDTO(Address a) {
        return new AddressDTO(
                a.getId(),
                a.getUserId(),
                a.getAddressType(),
                a.getStreet(),
                a.getNumber(),
                a.getDistrict(),
                a.getCity(),
                a.getRegion(),
                a.getPostalCode(),
                a.getCountry(),
                a.getActive(),
                a.getCreatedAt()
        );
    }

    public static Address toEntity(AddressDTO dto) {
        return Address.builder()
                .id(dto.id())
                .userId(dto.userId())
                .addressType(dto.addressType())
                .street(dto.street())
                .number(dto.number())
                .district(dto.district())
                .city(dto.city())
                .region(dto.region())
                .postalCode(dto.postalCode())
                .country(dto.country())
                .active(dto.isActive())
                .createdAt(dto.createdAt())
                .build();
    }
}