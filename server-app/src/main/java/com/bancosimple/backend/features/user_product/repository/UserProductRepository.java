package com.bancosimple.backend.features.user_product.repository;

import com.bancosimple.backend.features.user_product.model.UserProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserProductRepository extends JpaRepository<UserProduct, Long> {
}
