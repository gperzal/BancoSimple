package com.bancosimple.backend.cuenta_frecuente.repository;

import com.bancosimple.backend.cuenta_frecuente.model.CuentaFrecuente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CuentaFrecuenteRepository extends JpaRepository<CuentaFrecuente, Long> {
}
