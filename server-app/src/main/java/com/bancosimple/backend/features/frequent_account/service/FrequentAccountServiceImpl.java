package com.bancosimple.backend.features.frequent_account.service;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.features.frequent_account.dto.FrequentAccountDTO;
import com.bancosimple.backend.features.frequent_account.mapper.FrequentAccountMapper;
import com.bancosimple.backend.features.frequent_account.model.FrequentAccount;
import com.bancosimple.backend.features.frequent_account.repository.FrequentAccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FrequentAccountServiceImpl implements FrequentAccountService {

    private final FrequentAccountRepository repository;

    @Override
    public List<FrequentAccountDTO> findAll() {
        return repository.findAll().stream()
                .map(FrequentAccountMapper::toDTO)
                .toList();
    }

    @Override
    public FrequentAccountDTO findById(Long id) {
        return repository.findById(id)
                .map(FrequentAccountMapper::toDTO)
                .orElseThrow(() -> new ApiException("FrequentAccount not found with id: " + id));
    }

    @Override
    public FrequentAccountDTO save(FrequentAccountDTO dto) {
        return FrequentAccountMapper.toDTO(repository.save(FrequentAccountMapper.toEntity(dto)));
    }

    @Override
    public FrequentAccountDTO update(Long id, FrequentAccountDTO dto) {
        FrequentAccount fa = repository.findById(id)
                .orElseThrow(() -> new ApiException("FrequentAccount not found with id: " + id));

        fa.setAlias(dto.alias());
        fa.setActive(dto.active());

        return FrequentAccountMapper.toDTO(repository.save(fa));
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}