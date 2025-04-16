package com.bancosimple.backend.features.points_history.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "points_history")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PointsHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "operation_type")
    private String operationType;

    private Integer points;
    private String description;

    private LocalDateTime date;

    @PrePersist
    public void prePersist() {
        this.date = LocalDateTime.now();
    }
}
