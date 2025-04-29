package com.bancosimple.backend.features.product.service;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.features.product.dto.ProductDTO;
import com.bancosimple.backend.features.product.mapper.ProductMapper;
import com.bancosimple.backend.features.product.model.Product;
import com.bancosimple.backend.features.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository repository;

    @Override
    public List<ProductDTO> findAll() {
        return repository.findAll().stream()
                .map(ProductMapper::toDTO)
                .toList();
    }

    @Override
    public ProductDTO findById(Long id) {
        return repository.findById(id)
                .map(ProductMapper::toDTO)
                .orElseThrow(() -> new ApiException("Product not found with id: " + id));
    }

    @Override
    public ProductDTO save(ProductDTO dto) {
        Product product = ProductMapper.toEntity(dto);
        return ProductMapper.toDTO(repository.save(product));
    }

    @Override
    public ProductDTO update(Long id, ProductDTO dto) {
        Product existingProduct = repository.findById(id)
                .orElseThrow(() -> new ApiException("Product not found with id: " + id));

        Product updatedProduct = ProductMapper.toEntity(dto);
        updatedProduct.setId(existingProduct.getId()); // Preservamos el ID original

        return ProductMapper.toDTO(repository.save(updatedProduct));
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public ProductDTO requestProduct(ProductDTO dto) {
        Product product = ProductMapper.toEntity(dto);
        product.setStatusId(2); // Estado PENDING
        return ProductMapper.toDTO(repository.save(product));
    }

    @Override
    public ProductDTO updateStatus(Long id, Integer statusId) {
        Product product = repository.findById(id)
                .orElseThrow(() -> new ApiException("Product not found with id: " + id));
        product.setStatusId(statusId);
        return ProductMapper.toDTO(repository.save(product));
    }


}
