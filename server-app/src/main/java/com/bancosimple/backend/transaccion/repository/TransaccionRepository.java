package com.bancosimple.backend.transaccion.repository;

import com.bancosimple.backend.transaccion.model.Transaccion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransaccionRepository extends JpaRepository<Transaccion, Long> {
}
