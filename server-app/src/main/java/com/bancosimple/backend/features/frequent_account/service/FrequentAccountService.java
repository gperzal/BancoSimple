package com.bancosimple.backend.features.frequent_account.service;

import com.bancosimple.backend.features.frequent_account.dto.FrequentAccountDTO;
import java.util.List;

public interface FrequentAccountService {
    List<FrequentAccountDTO> findByUserId(Long userId);
    FrequentAccountDTO findById(Long id);
    FrequentAccountDTO save(FrequentAccountDTO dto);
    FrequentAccountDTO update(Long id, FrequentAccountDTO dto);
    void deleteById(Long id);
}