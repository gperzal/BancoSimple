package com.bancosimple.backend.features.status.service;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.features.status.dto.StatusDTO;
import com.bancosimple.backend.features.status.mapper.StatusMapper;
import com.bancosimple.backend.features.status.model.Status;
import com.bancosimple.backend.features.status.repository.StatusRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StatusServiceImpl implements StatusService {

    private final StatusRepository repository;

    @Override
    public List<StatusDTO> findAll() {
        return repository.findAll().stream()
                .map(StatusMapper::toDTO)
                .toList();
    }

    @Override
    public StatusDTO findById(Long id) {
        return repository.findById(id)
                .map(StatusMapper::toDTO)
                .orElseThrow(() -> new ApiException("Status not found with id: " + id));
    }

    @Override
    public StatusDTO save(StatusDTO dto) {
        Status status = StatusMapper.toEntity(dto);
        return StatusMapper.toDTO(repository.save(status));
    }

    @Override
    public StatusDTO update(Long id, StatusDTO dto) {
        Status status = repository.findById(id)
                .orElseThrow(() -> new ApiException("Status not found with id: " + id));

        status.setCode(dto.code());
        status.setDescription(dto.description());

        return StatusMapper.toDTO(repository.save(status));
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
