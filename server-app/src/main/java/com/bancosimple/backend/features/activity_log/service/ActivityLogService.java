package com.bancosimple.backend.features.activity_log.service;

import com.bancosimple.backend.features.activity_log.dto.ActivityLogDTO;

import java.util.List;

public interface ActivityLogService {
    List<ActivityLogDTO> findAll();
    ActivityLogDTO findById(Long id);
    ActivityLogDTO save(ActivityLogDTO dto);
    void deleteById(Long id);
}