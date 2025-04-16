package com.bancosimple.backend.features.card.service;

import com.bancosimple.backend.features.card.dto.CardDTO;

import java.util.List;

public interface CardService {
    List<CardDTO> findAll();
    CardDTO findById(Long id);
    CardDTO save(CardDTO dto);
    CardDTO update(Long id, CardDTO dto);
    void deleteById(Long id);
}
