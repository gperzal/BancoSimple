package com.bancosimple.backend.features.status.repository;

import com.bancosimple.backend.features.status.model.Status;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusRepository extends JpaRepository<Status, Long> {
}
