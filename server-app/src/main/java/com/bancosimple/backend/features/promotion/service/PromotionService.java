package com.bancosimple.backend.features.promotion.service;

import com.bancosimple.backend.features.promotion.dto.PromotionDTO;
import java.util.List;

public interface PromotionService {
    List<PromotionDTO> findAll();
    PromotionDTO findById(Long id);
    PromotionDTO save(PromotionDTO dto);
    PromotionDTO update(Long id, PromotionDTO dto);
    void deleteById(Long id);
}
