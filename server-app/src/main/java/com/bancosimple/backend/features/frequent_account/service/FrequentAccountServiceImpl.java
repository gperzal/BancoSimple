package com.bancosimple.backend.features.frequent_account.service;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.exception.BadRequestException;
import com.bancosimple.backend.features.frequent_account.dto.FrequentAccountDTO;
import com.bancosimple.backend.features.frequent_account.mapper.FrequentAccountMapper;
import com.bancosimple.backend.features.frequent_account.model.AccountType;
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
        if (dto.type() == AccountType.EXTERNAL) {
            if (dto.externalBankName() == null || dto.externalAccountNumber() == null || dto.externalHolderName() == null) {
                throw new BadRequestException("External accounts require bank name, account number and holder name");
            }
        } else {
            if (dto.favoriteProductId() == null) {
                throw new BadRequestException("Internal accounts require a favoriteProductId");
            }
        }

        FrequentAccount entity = FrequentAccountMapper.toEntity(dto);
        return FrequentAccountMapper.toDTO(repository.save(entity));
    }

    @Override
    public FrequentAccountDTO update(Long id, FrequentAccountDTO dto) {
        FrequentAccount fa = repository.findById(id)
                .orElseThrow(() -> new ApiException("FrequentAccount not found with id: " + id));

        fa.setType(dto.type());
        fa.setAlias(dto.alias());
        fa.setActive(dto.active());
        if (dto.type() == com.bancosimple.backend.features.frequent_account.model.AccountType.EXTERNAL) {
            fa.setExternalBankName(dto.externalBankName());
            fa.setExternalAccountNumber(dto.externalAccountNumber());
            fa.setExternalHolderName(dto.externalHolderName());
        } else {
            fa.setFavoriteProductId(dto.favoriteProductId());
        }

        return FrequentAccountMapper.toDTO(repository.save(fa));
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}