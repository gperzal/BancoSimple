package com.bancosimple.backend.features.user_promotion.service;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.features.user_promotion.dto.UserPromotionDTO;
import com.bancosimple.backend.features.user_promotion.mapper.UserPromotionMapper;
import com.bancosimple.backend.features.user_promotion.model.UserPromotion;
import com.bancosimple.backend.features.user_promotion.repository.UserPromotionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserPromotionServiceImpl implements UserPromotionService {

    private final UserPromotionRepository repository;

    @Override
    public List<UserPromotionDTO> findAll() {
        return repository.findAll().stream()
                .map(UserPromotionMapper::toDTO)
                .toList();
    }

    @Override
    public UserPromotionDTO findById(Long id) {
        return repository.findById(id)
                .map(UserPromotionMapper::toDTO)
                .orElseThrow(() -> new ApiException("User promotion not found with id: " + id));
    }

    @Override
    public UserPromotionDTO save(UserPromotionDTO dto) {
        return UserPromotionMapper.toDTO(repository.save(UserPromotionMapper.toEntity(dto)));
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
