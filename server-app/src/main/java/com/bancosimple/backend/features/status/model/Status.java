package com.bancosimple.backend.features.status.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "statuses")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Status {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String code;

    private String description;
}
