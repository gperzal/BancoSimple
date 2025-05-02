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
    public List<FrequentAccountDTO> findByUserId(Long userId) {
        return repository.findAllByUserIdAndFavoriteTrue(userId)
                .stream()
                .map(FrequentAccountMapper::toDTO)
                .toList();
    }

    @Override
    public List<FrequentAccountDTO> findAllByUserId(Long userId) {
        return repository.findAllByUserId(userId)
                .stream()
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
        if (dto.category() == null || dto.accountNumber() == null || dto.holderName() == null || dto.rut() == null) {
            throw new BadRequestException("All fields are required for saving a frequent account");
        }

        if (dto.type() == AccountType.EXTERNAL && dto.bankName() == null) {
            throw new BadRequestException("Bank name is required for external accounts");
        }


        FrequentAccount entity = FrequentAccountMapper.toEntity(dto);
        return FrequentAccountMapper.toDTO(repository.save(entity));
    }

    @Override
    public FrequentAccountDTO update(Long id, FrequentAccountDTO dto) {
        FrequentAccount fa = repository.findById(id)
                .orElseThrow(() -> new ApiException("FrequentAccount not found with id: " + id));

        fa.setType(dto.type());
        fa.setCategory(dto.category());
        fa.setBankName(dto.bankName());
        fa.setAccountNumber(dto.accountNumber());
        fa.setHolderName(dto.holderName());
        fa.setRut(dto.rut());
        fa.setAlias(dto.alias());
        fa.setFavorite(dto.favorite());

        return FrequentAccountMapper.toDTO(repository.save(fa));
    }

    @Override
    public void deleteById(Long id, Long currentUserId) {
        FrequentAccount fa = repository.findById(id)
                .orElseThrow(() -> new ApiException("FrequentAccount not found with id: " + id));

        if (!fa.getUserId().equals(currentUserId)) {
            throw new ApiException("You do not have permission to delete this contact");
        }
        repository.delete(fa);
    }
}
