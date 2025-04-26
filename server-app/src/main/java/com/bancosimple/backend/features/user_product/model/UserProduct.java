package com.bancosimple.backend.features.user_product.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_products")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "product_id")
    private Long productId;

    @Column(name = "product_number", unique = true)
    private String productNumber;

    private String alias;

    private BigDecimal balance;

    @Column(name = "credit_limit")
    private BigDecimal creditLimit;

    @Column(name = "status_id")
    private Integer statusId;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }
}
