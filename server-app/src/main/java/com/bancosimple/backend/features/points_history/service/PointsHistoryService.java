package com.bancosimple.backend.features.points_history.service;

import com.bancosimple.backend.features.points_history.dto.PointsHistoryDTO;

import java.util.List;

public interface PointsHistoryService {
    List<PointsHistoryDTO> findAll();
    PointsHistoryDTO findById(Long id);
    PointsHistoryDTO save(PointsHistoryDTO dto);
    void deleteById(Long id);
}
