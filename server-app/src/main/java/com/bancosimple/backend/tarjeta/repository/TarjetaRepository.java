package com.bancosimple.backend.tarjeta.repository;

import com.bancosimple.backend.tarjeta.model.Tarjeta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TarjetaRepository extends JpaRepository<Tarjeta, Long> {
}
