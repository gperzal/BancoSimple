package com.bancosimple.backend.features.user_promotion.service;

import com.bancosimple.backend.features.user_promotion.dto.UserPromotionDTO;

import java.util.List;

public interface UserPromotionService {
    List<UserPromotionDTO> findAll();
    UserPromotionDTO findById(Long id);
    UserPromotionDTO save(UserPromotionDTO dto);
    void deleteById(Long id);
}
