package com.bancosimple.backend.features.backup_log.service;

import com.bancosimple.backend.features.backup_log.dto.BackupLogDTO;
import java.util.List;

public interface BackupLogService {
    List<BackupLogDTO> findAll();
    BackupLogDTO findById(Long id);
    BackupLogDTO save(BackupLogDTO dto);
    void deleteById(Long id);
}
