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

    @Enumerated(EnumType.STRING)
    @Column(name = "account_category")
    private AccountCategory category;

    @Enumerated(EnumType.STRING)
    @Column(name = "bank_name")
    private BankName bankName;

    @Column(name = "account_number")
    private String accountNumber;

    @Column(name = "holder_name")
    private String holderName;

    @Column(name = "rut")
    private String rut;

    private String alias;

    @Column(name = "added_date")
    private LocalDateTime addedDate;

    private Boolean favorite = false;

    @PrePersist
    public void prePersist() {
        this.addedDate = LocalDateTime.now();

        if (this.type == AccountType.INTERNAL && this.bankName == null) {
            this.bankName = BankName.BANCO_SIMPLE;
        }

    }
}
