package com.bancosimple.backend.features.status.service;

import com.bancosimple.backend.features.status.dto.StatusDTO;

import java.util.List;

public interface StatusService {
    List<StatusDTO> findAll();
    StatusDTO findById(Long id);
    StatusDTO save(StatusDTO dto);
    StatusDTO update(Long id, StatusDTO dto);
    void deleteById(Long id);
}
