package com.bancosimple.backend.features.role.service;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.features.role.dto.RoleDTO;
import com.bancosimple.backend.features.role.mapper.RoleMapper;
import com.bancosimple.backend.features.role.model.Role;
import com.bancosimple.backend.features.role.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {

    private final RoleRepository repository;

    @Override
    public List<RoleDTO> findAll() {
        return repository.findAll().stream()
                .map(RoleMapper::toDTO)
                .toList();
    }

    @Override
    public RoleDTO findById(Long id) {
        return repository.findById(id)
                .map(RoleMapper::toDTO)
                .orElseThrow(() -> new ApiException("Role not found with id: " + id));
    }

    @Override
    public RoleDTO save(RoleDTO dto) {
        return RoleMapper.toDTO(repository.save(RoleMapper.toEntity(dto)));
    }

    @Override
    public RoleDTO update(Long id, RoleDTO dto) {
        Role role = repository.findById(id)
                .orElseThrow(() -> new ApiException("Role not found with id: " + id));

        role.setName(dto.name());
        role.setDescription(dto.description());

        return RoleMapper.toDTO(repository.save(role));
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
