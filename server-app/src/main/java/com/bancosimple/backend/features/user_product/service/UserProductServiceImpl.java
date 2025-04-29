package com.bancosimple.backend.features.user_product.service;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.features.product.model.Product;
import com.bancosimple.backend.features.product.repository.ProductRepository;
import com.bancosimple.backend.features.user_product.dto.InternalAccountsResponseDTO;
import com.bancosimple.backend.features.user_product.dto.UserProductDTO;
import com.bancosimple.backend.features.user_product.mapper.UserProductMapper;
import com.bancosimple.backend.features.user_product.model.UserProduct;
import com.bancosimple.backend.features.user_product.repository.UserProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserProductServiceImpl implements UserProductService {

    private final UserProductRepository repository;
    private final ProductRepository productRepository;

    @Override
    public List<UserProductDTO> findAll() {
        return repository.findAll().stream()
                .map(UserProductMapper::toDTO)
                .toList();
    }

    @Override
    public UserProductDTO findById(Long id) {
        return repository.findById(id)
                .map(UserProductMapper::toDTO)
                .orElseThrow(() -> new ApiException("UserProduct not found with id: " + id));
    }

    @Override
    public UserProductDTO save(UserProductDTO dto) {
        UserProduct entity = UserProductMapper.toEntity(dto);
        return UserProductMapper.toDTO(repository.save(entity));
    }

    @Override
    public UserProductDTO update(Long id, UserProductDTO dto) {
        UserProduct existing = repository.findById(id)
                .orElseThrow(() -> new ApiException("UserProduct not found with id: " + id));

        UserProduct updated = UserProductMapper.toEntity(dto);
        updated.setId(existing.getId()); // Preservamos el ID original

        return UserProductMapper.toDTO(repository.save(updated));
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<InternalAccountsResponseDTO.InternalAccountDTO> findInternalAccountsByUserId(Long userId) {
        return repository.findByUserId(userId).stream()
                .map(userProduct -> {
                    Product product = productRepository.findById(userProduct.getProductId())
                            .orElseThrow(() -> new ApiException("Product not found for id: " + userProduct.getProductId()));

                    return new InternalAccountsResponseDTO.InternalAccountDTO(
                            userProduct.getId(),
                            product.getName(),
                            product.getProductType().name(),
                            userProduct.getProductNumber()
                    );
                })
                .toList();
    }
}
