package com.bancosimple.backend.features.address.service;

import com.bancosimple.backend.features.address.dto.AddressDTO;

import java.util.List;

public interface AddressService {
    List<AddressDTO> findAll();
    AddressDTO findById(Long id);
    AddressDTO save(AddressDTO dto);
    AddressDTO update(Long id, AddressDTO dto);
    void deleteById(Long id);
}