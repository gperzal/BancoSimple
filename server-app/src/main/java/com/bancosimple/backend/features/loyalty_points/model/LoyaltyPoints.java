package com.bancosimple.backend.features.loyalty_points.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "loyalty_points")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LoyaltyPoints {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "accumulated_points")
    private Integer accumulatedPoints;

    @Column(name = "used_points")
    private Integer usedPoints;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
