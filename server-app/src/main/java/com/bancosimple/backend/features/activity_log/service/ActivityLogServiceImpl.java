package com.bancosimple.backend.features.activity_log.service;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.features.activity_log.dto.ActivityLogDTO;
import com.bancosimple.backend.features.activity_log.mapper.ActivityLogMapper;
import com.bancosimple.backend.features.activity_log.repository.ActivityLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ActivityLogServiceImpl implements ActivityLogService {

    private final ActivityLogRepository repository;

    @Override
    public List<ActivityLogDTO> findAll() {
        return repository.findAll().stream()
                .map(ActivityLogMapper::toDTO)
                .toList();
    }

    @Override
    public ActivityLogDTO findById(Long id) {
        return repository.findById(id)
                .map(ActivityLogMapper::toDTO)
                .orElseThrow(() -> new ApiException("ActivityLog not found with id: " + id));
    }

    @Override
    public ActivityLogDTO save(ActivityLogDTO dto) {
        return ActivityLogMapper.toDTO(repository.save(ActivityLogMapper.toEntity(dto)));
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}