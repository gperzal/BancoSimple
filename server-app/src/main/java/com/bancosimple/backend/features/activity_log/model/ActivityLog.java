package com.bancosimple.backend.features.activity_log.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "activity logs")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ActivityLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id;")
    private Long userId;

    private String action;

    @Column(name = "source_ip")
    private String sourceIp;

    private LocalDateTime date;

    @Column(columnDefinition = "JSON")
    private String details;

    @PrePersist
    public void prePersist() {
        this.date = LocalDateTime.now();
    }
}