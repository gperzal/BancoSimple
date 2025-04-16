package com.bancosimple.backend.features.loyalty_points.service;

import com.bancosimple.backend.features.loyalty_points.dto.LoyaltyPointsDTO;
import java.util.List;

public interface LoyaltyPointsService {
    List<LoyaltyPointsDTO> findAll();
    LoyaltyPointsDTO findById(Long id);
    LoyaltyPointsDTO save(LoyaltyPointsDTO dto);
    LoyaltyPointsDTO update(Long id, LoyaltyPointsDTO dto);
    void deleteById(Long id);
}
