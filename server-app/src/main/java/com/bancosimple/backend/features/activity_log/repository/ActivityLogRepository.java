package com.bancosimple.backend.features.activity_log.repository;

import com.bancosimple.backend.features.activity_log.model.ActivityLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityLogRepository extends JpaRepository<ActivityLog, Long> {
}