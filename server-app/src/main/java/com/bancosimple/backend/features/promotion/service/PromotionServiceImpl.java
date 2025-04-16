package com.bancosimple.backend.features.promotion.service;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.features.promotion.dto.PromotionDTO;
import com.bancosimple.backend.features.promotion.mapper.PromotionMapper;
import com.bancosimple.backend.features.promotion.model.Promotion;
import com.bancosimple.backend.features.promotion.repository.PromotionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PromotionServiceImpl implements PromotionService {

    private final PromotionRepository repository;

    @Override
    public List<PromotionDTO> findAll() {
        return repository.findAll().stream().map(PromotionMapper::toDTO).toList();
    }

    @Override
    public PromotionDTO findById(Long id) {
        return repository.findById(id)
                .map(PromotionMapper::toDTO)
                .orElseThrow(() -> new ApiException("Promotion not found with id: " + id));
    }

    @Override
    public PromotionDTO save(PromotionDTO dto) {
        return PromotionMapper.toDTO(repository.save(PromotionMapper.toEntity(dto)));
    }

    @Override
    public PromotionDTO update(Long id, PromotionDTO dto) {
        Promotion promotion = repository.findById(id)
                .orElseThrow(() -> new ApiException("Promotion not found with id: " + id));

        promotion.setName(dto.name());
        promotion.setDescription(dto.description());
        promotion.setType(dto.type());
        promotion.setPercentage(dto.percentage());
        promotion.setMaxAmount(dto.maxAmount());
        promotion.setWeekDays(dto.weekDays());
        promotion.setStore(dto.store());
        promotion.setStartDate(dto.startDate());
        promotion.setEndDate(dto.endDate());
        promotion.setIsActive(dto.isActive());

        return PromotionMapper.toDTO(repository.save(promotion));
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
