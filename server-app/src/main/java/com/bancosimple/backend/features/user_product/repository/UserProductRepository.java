package com.bancosimple.backend.features.user_product.repository;

import com.bancosimple.backend.features.user_product.model.UserProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserProductRepository extends JpaRepository<UserProduct, Long> {
    List<UserProduct> findByUserId(Long userId);
}
