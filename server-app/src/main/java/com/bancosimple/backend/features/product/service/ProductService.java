package com.bancosimple.backend.features.product.service;

import com.bancosimple.backend.features.product.dto.ProductDTO;
import java.util.List;

public interface ProductService {
    List<ProductDTO> findAll();
    ProductDTO findById(Long id);
    ProductDTO save(ProductDTO dto);
    ProductDTO update(Long id, ProductDTO dto);
    void deleteById(Long id);
    ProductDTO requestProduct(ProductDTO dto);
    ProductDTO updateStatus(Long id, Integer statusId);
}
