package com.bancosimple.backend.features.backup_log.service;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.features.backup_log.dto.BackupLogDTO;
import com.bancosimple.backend.features.backup_log.mapper.BackupLogMapper;
import com.bancosimple.backend.features.backup_log.model.BackupLog;
import com.bancosimple.backend.features.backup_log.repository.BackupLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BackupLogServiceImpl implements BackupLogService {

    private final BackupLogRepository repository;

    @Override
    public List<BackupLogDTO> findAll() {
        return repository.findAll().stream()
                .map(BackupLogMapper::toDTO)
                .toList();
    }

    @Override
    public BackupLogDTO findById(Long id) {
        return repository.findById(id)
                .map(BackupLogMapper::toDTO)
                .orElseThrow(() -> new ApiException("BackupLog not found with id: " + id));
    }

    @Override
    public BackupLogDTO save(BackupLogDTO dto) {
        return BackupLogMapper.toDTO(repository.save(BackupLogMapper.toEntity(dto)));
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
