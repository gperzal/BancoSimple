package com.bancosimple.backend.producto.repository;

import com.bancosimple.backend.producto.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
}