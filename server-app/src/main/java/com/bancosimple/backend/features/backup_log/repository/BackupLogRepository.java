package com.bancosimple.backend.features.backup_log.repository;

import com.bancosimple.backend.features.backup_log.model.BackupLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BackupLogRepository extends JpaRepository<BackupLog, Long> {}
