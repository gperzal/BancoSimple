package com.bancosimple.backend.features.address.service;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.features.address.dto.AddressDTO;
import com.bancosimple.backend.features.address.mapper.AddressMapper;
import com.bancosimple.backend.features.address.model.Address;
import com.bancosimple.backend.features.address.repository.AddressRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AddressServiceImpl implements AddressService {

    private final AddressRepository repository;

    @Override
    public List<AddressDTO> findAll() {
        return repository.findAll().stream()
                .map(AddressMapper::toDTO)
                .toList();
    }

    @Override
    public AddressDTO findById(Long id) {
        return repository.findById(id)
                .map(AddressMapper::toDTO)
                .orElseThrow(() -> new ApiException("Address not found with id: " + id));
    }

    @Override
    public AddressDTO save(AddressDTO dto) {
        return AddressMapper.toDTO(repository.save(AddressMapper.toEntity(dto)));
    }

    @Override
    public AddressDTO update(Long id, AddressDTO dto) {
        Address address = repository.findById(id)
                .orElseThrow(() -> new ApiException("Address not found with id: " + id));

        address.setStreet(dto.street());
        address.setNumber(dto.number());
        address.setDistrict(dto.district());
        address.setCity(dto.city());
        address.setRegion(dto.region());
        address.setPostalCode(dto.postalCode());
        address.setCountry(dto.country());
        address.setActive(dto.isActive());

        return AddressMapper.toDTO(repository.save(address));
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}

