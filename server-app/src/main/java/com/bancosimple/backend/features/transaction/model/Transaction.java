package com.bancosimple.backend.features.transaction.model;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "transactions")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "origin_product_id")
    private Long originProductId;

    @Column(name = "destination_product_id")
    private Long destinationProductId;

    private BigDecimal amount;

    private String currency;

    private String description;

    private String category;

    @Column(name = "external_reference")
    private String externalReference;

    @Column(name = "status_id")
    private Integer statusId;

    private LocalDateTime date;

    @PrePersist
    public void prePersist() {
        this.date = LocalDateTime.now();
    }
}
