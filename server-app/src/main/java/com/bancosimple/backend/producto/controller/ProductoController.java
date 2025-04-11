package com.bancosimple.backend.producto.controller;

import com.bancosimple.backend.producto.dto.ProductoDTO;
import com.bancosimple.backend.producto.mapper.ProductoMapper;
import com.bancosimple.backend.producto.model.Producto;
import com.bancosimple.backend.producto.service.ProductoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    private final ProductoService productoService;

    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    @GetMapping
    public List<ProductoDTO> getAll() {
        return productoService.findAll().stream()
                .map(ProductoMapper::toDTO)
                .toList();
    }

    @GetMapping("/{id}")
    public ProductoDTO getById(@PathVariable Long id) {
        Producto producto = productoService.findById(id)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado"));
        return ProductoMapper.toDTO(producto);
    }

    @PostMapping
    public ProductoDTO create(@RequestBody ProductoDTO dto) {
        Producto saved = productoService.save(ProductoMapper.toEntity(dto));
        return ProductoMapper.toDTO(saved);
    }

    @PutMapping("/{id}")
    public ProductoDTO update(@PathVariable Long id, @RequestBody ProductoDTO dto) {
        Producto producto = ProductoMapper.toEntity(dto);
        producto.setId(id);
        Producto updated = productoService.save(producto);
        return ProductoMapper.toDTO(updated);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productoService.deleteById(id);
    }
}
