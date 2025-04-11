package com.bancosimple.backend.producto.mapper;

import com.bancosimple.backend.producto.dto.ProductoDTO;
import com.bancosimple.backend.producto.model.Producto;

public class ProductoMapper {

    public static ProductoDTO toDTO(Producto producto) {
        ProductoDTO dto = new ProductoDTO();
        dto.setId(producto.getId());
        dto.setTipoProducto(producto.getTipoProducto());
        dto.setNumeroProducto(producto.getNumeroProducto());
        dto.setSaldo(producto.getSaldo());
        return dto;
    }

    public static Producto toEntity(ProductoDTO dto) {
        Producto producto = new Producto();
        producto.setId(dto.getId());
        producto.setTipoProducto(dto.getTipoProducto());
        producto.setNumeroProducto(dto.getNumeroProducto());
        producto.setSaldo(dto.getSaldo());
        return producto;
    }
}
