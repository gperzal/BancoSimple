package com.bancosimple.backend.repository;

import com.bancosimple.backend.model.LogActividad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogActividadRepository extends JpaRepository<LogActividad, Long> {
}
