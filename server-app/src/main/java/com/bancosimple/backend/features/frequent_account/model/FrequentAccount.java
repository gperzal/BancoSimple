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

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Enumerated(EnumType.STRING)
    @Column(name = "account_type", nullable = false)
    private AccountType type;

    // Solo para cuentas internas (propias)
    @Column(name = "favorite_product_id")
    private Long favoriteProductId;

    // Solo para cuentas externas
    @Enumerated(EnumType.STRING)
    @Column(name = "external_bank_name")
    private BankName externalBankName;

    @Column(name = "external_account_number")
    private String externalAccountNumber;

    @Column(name = "external_holder_name")
    private String externalHolderName;

    private String alias;

    @Column(name = "added_date")
    private LocalDateTime addedDate;

    private Boolean active;

    @PrePersist
    public void prePersist() {
        this.addedDate = LocalDateTime.now();
    }
}