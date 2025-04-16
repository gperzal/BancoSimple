package com.bancosimple.backend.features.card.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "cards")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product_id")
    private Long productId;

    @Column(name = "card_type")
    private String cardType;

    @Column(name = "card_number")
    private String cardNumber;

    private String cvv;

    @Column(name = "pin_hash")
    private String pinHash;

    @Column(name = "expiration_date")
    private LocalDate expirationDate;

    @Column(name = "printed_name")
    private String printedName;

    private Boolean active;

    @Column(name = "state_id")
    private Integer stateId;

    @Column(name = "issued_at")
    private LocalDate issuedAt;

    @PrePersist
    public void prePersist() {
        this.issuedAt = LocalDate.now();
    }
}
