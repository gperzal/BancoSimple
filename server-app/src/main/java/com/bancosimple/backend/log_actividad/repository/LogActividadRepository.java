package com.bancosimple.backend.log_actividad.repository;

import com.bancosimple.backend.log_actividad.model.LogActividad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogActividadRepository extends JpaRepository<LogActividad, Long> {
}
