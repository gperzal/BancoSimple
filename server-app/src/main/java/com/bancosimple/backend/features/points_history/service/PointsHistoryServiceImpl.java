package com.bancosimple.backend.features.points_history.service;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.features.points_history.dto.PointsHistoryDTO;
import com.bancosimple.backend.features.points_history.mapper.PointsHistoryMapper;
import com.bancosimple.backend.features.points_history.model.PointsHistory;
import com.bancosimple.backend.features.points_history.repository.PointsHistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PointsHistoryServiceImpl implements PointsHistoryService {

    private final PointsHistoryRepository repository;

    @Override
    public List<PointsHistoryDTO> findAll() {
        return repository.findAll().stream()
                .map(PointsHistoryMapper::toDTO)
                .toList();
    }

    @Override
    public PointsHistoryDTO findById(Long id) {
        return repository.findById(id)
                .map(PointsHistoryMapper::toDTO)
                .orElseThrow(() -> new ApiException("PointsHistory not found with id: " + id));
    }

    @Override
    public PointsHistoryDTO save(PointsHistoryDTO dto) {
        PointsHistory entity = PointsHistoryMapper.toEntity(dto);
        return PointsHistoryMapper.toDTO(repository.save(entity));
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
