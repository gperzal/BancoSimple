package com.bancosimple.backend.features.loyalty_points.service;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.features.loyalty_points.dto.LoyaltyPointsDTO;
import com.bancosimple.backend.features.loyalty_points.mapper.LoyaltyPointsMapper;
import com.bancosimple.backend.features.loyalty_points.model.LoyaltyPoints;
import com.bancosimple.backend.features.loyalty_points.repository.LoyaltyPointsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LoyaltyPointsServiceImpl implements LoyaltyPointsService {

    private final LoyaltyPointsRepository repository;

    @Override
    public List<LoyaltyPointsDTO> findAll() {
        return repository.findAll().stream()
                .map(LoyaltyPointsMapper::toDTO)
                .toList();
    }

    @Override
    public LoyaltyPointsDTO findById(Long id) {
        return repository.findById(id)
                .map(LoyaltyPointsMapper::toDTO)
                .orElseThrow(() -> new ApiException("LoyaltyPoints not found with id: " + id));
    }

    @Override
    public LoyaltyPointsDTO save(LoyaltyPointsDTO dto) {
        return LoyaltyPointsMapper.toDTO(repository.save(LoyaltyPointsMapper.toEntity(dto)));
    }

    @Override
    public LoyaltyPointsDTO update(Long id, LoyaltyPointsDTO dto) {
        LoyaltyPoints entity = repository.findById(id)
                .orElseThrow(() -> new ApiException("LoyaltyPoints not found with id: " + id));

        entity.setAccumulatedPoints(dto.accumulatedPoints());
        entity.setUsedPoints(dto.usedPoints());
        entity.setUpdatedAt(dto.updatedAt());

        return LoyaltyPointsMapper.toDTO(repository.save(entity));
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
