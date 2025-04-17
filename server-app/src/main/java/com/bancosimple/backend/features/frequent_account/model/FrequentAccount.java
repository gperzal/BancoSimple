package com.bancosimple.backend.features.frequent_account.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "frequent_accounts")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FrequentAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "favorite_product_id;")
    private Long favoriteProductId;

    private String alias;

    @Column(name = "added_date")
    private LocalDateTime addedDate;

    private Boolean active;

    @PrePersist
    public void prePersist() {
        this.addedDate = LocalDateTime.now();
    }
}
