package com.bancosimple.backend.features.backup_log.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "logs_respaldo")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BackupLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_action_id")
    private Long userActionId;

    private String table;

    @Column(name = "record_id")
    private Long recordId;

    @Column(name = "operation_type")
    private String operationType;

    @Column(name = "previous_data", columnDefinition = "json")
    private String previousData;

    @Column(name = "new_data", columnDefinition = "json")
    private String newData;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "ip_address")
    private String ipAddress;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }
}
