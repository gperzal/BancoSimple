package com.bancosimple.backend.features.product.repository;

import com.bancosimple.backend.features.product.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
