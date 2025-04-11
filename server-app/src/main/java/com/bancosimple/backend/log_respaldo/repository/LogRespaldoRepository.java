package com.bancosimple.backend.log_respaldo.repository;

import com.bancosimple.backend.log_respaldo.model.LogRespaldo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogRespaldoRepository extends JpaRepository<LogRespaldo, Long> {
}
