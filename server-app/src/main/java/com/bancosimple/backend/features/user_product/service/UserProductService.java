package com.bancosimple.backend.features.user_product.service;

import com.bancosimple.backend.features.user_product.dto.InternalAccountsResponseDTO;
import com.bancosimple.backend.features.user_product.dto.UserProductDTO;

import java.util.List;

public interface UserProductService {
    List<UserProductDTO> findAll();
    UserProductDTO findById(Long id);
    UserProductDTO save(UserProductDTO dto);
    UserProductDTO update(Long id, UserProductDTO dto);
    void deleteById(Long id);
    List<InternalAccountsResponseDTO.InternalAccountDTO> findInternalAccountsByUserId(Long userId);
}
