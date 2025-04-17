package com.bancosimple.backend.features.user_promotion.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_promotions")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserPromotion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "promotion_id")
    private Long promotionId;

    @Column(name = "product_id")
    private Long productId;

    @Column(name = "transaction_id")
    private Long transactionId;

    @Column(name = "application_type")
    private String applicationType;

    @Column(name = "applied_amount")
    private BigDecimal appliedAmount;

    @Column(name = "application_date")
    private LocalDateTime applicationDate;


    @PrePersist
    public void prePersist() {
        this.applicationDate = LocalDateTime.now();
    }
}
