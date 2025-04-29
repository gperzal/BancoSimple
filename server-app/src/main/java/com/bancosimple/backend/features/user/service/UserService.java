package com.bancosimple.backend.features.user.service;

import com.bancosimple.backend.features.user.dto.UserAccountDTO;
import com.bancosimple.backend.features.user.dto.UserDTO;
import java.util.List;
import java.util.Optional;

public interface UserService {
    List<UserDTO> findAll();
    UserDTO findById(Long id);
    UserDTO save(UserDTO userDTO);
    UserDTO update(Long id, UserDTO userDTO);
    void deleteById(Long id);
    UserDTO findByEmail(String email);
    Optional<UserDTO> findByRutOrEmail(String rut, String email);
}
