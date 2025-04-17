package com.bancosimple.backend.features.promotion.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "promotions")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Promotion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String type;
    private BigDecimal percentage;

    @Column(name = "max_amount")
    private BigDecimal maxAmount;

    @ElementCollection
    @CollectionTable(name = "promotion_weekdays",
            joinColumns = @JoinColumn(name = "promotion_id"))
    @Column(name = "weekday")
    @Enumerated(EnumType.STRING)
    private List<DayOfWeek> weekDays;

    private String store;
    private LocalDate startDate;
    private LocalDate endDate;
    private Boolean isActive;
}
