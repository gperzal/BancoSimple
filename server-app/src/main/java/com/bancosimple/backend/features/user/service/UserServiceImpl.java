package com.bancosimple.backend.features.user.service;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.features.user.dto.UserDTO;
import com.bancosimple.backend.features.user.dto.UserAccountDTO;
import com.bancosimple.backend.features.user.mapper.UserMapper;
import com.bancosimple.backend.features.user.model.User;
import com.bancosimple.backend.features.user.repository.UserRepository;
import com.bancosimple.backend.features.frequent_account.dto.FrequentAccountDTO;
import com.bancosimple.backend.features.frequent_account.model.AccountType;
import com.bancosimple.backend.features.frequent_account.service.FrequentAccountService;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository repository;
    private final FrequentAccountService frequentAccountService;

    @Override
    public List<UserDTO> findAll() {
        return repository.findAll().stream()
                .map(UserMapper::toDTO)
                .toList();
    }

    @Override
    public UserDTO findById(Long id) {
        return repository.findById(id)
                .map(UserMapper::toDTO)
                .orElseThrow(() -> new ApiException("User not found with id: " + id));
    }

    @Override
    public UserDTO save(UserDTO dto) {
        User entity = UserMapper.toEntity(dto);
        return UserMapper.toDTO(repository.save(entity));
    }

    @Override
    public UserDTO update(Long id, UserDTO dto) {
        User user = repository.findById(id)
                .orElseThrow(() -> new ApiException("User not found with id: " + id));

        user.setFirstName(dto.firstName());
        user.setLastName(dto.lastName());
        user.setPhone(dto.phone());
        user.setDocumentType(dto.documentType());
        user.setDocumentNumber(dto.documentNumber());
        user.setBirthDate(dto.birthDate());
        user.setStatusId(dto.statusId());

        return UserMapper.toDTO(repository.save(user));
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public UserDTO findByEmail(String email) {
        return repository.findByEmail(email)
                .map(UserMapper::toDTO)
                .orElseThrow(() -> new ApiException("User not found with email: " + email));
    }

    @Override
    public UserAccountDTO findByDocumentNumber(String documentNumber) {
        User u = repository.findByDocumentNumber(documentNumber)
                .orElseThrow(() -> new ApiException("User not found with documentNumber: " + documentNumber));

        // obtener todas las cuentas frecuentes del usuario
        List<FrequentAccountDTO> favs = frequentAccountService.findAll().stream()
                .filter(fa -> fa.userId().equals(u.getId()))
                .toList();

        // mapear a “número de cuenta” según tipo
        List<String> accountNumbers = favs.stream()
                .map(fa -> {
                    if (fa.type() == AccountType.EXTERNAL) {
                        return fa.externalAccountNumber();
                    } else {
                        // para internas usamos el ID de producto como placeholder
                        return fa.favoriteProductId().toString();
                    }
                })
                .toList();

        return new UserAccountDTO(
                u.getFirstName(),
                u.getLastName(),
                u.getEmail(),
                u.getDocumentNumber(),
                accountNumbers
        );
    }
}
