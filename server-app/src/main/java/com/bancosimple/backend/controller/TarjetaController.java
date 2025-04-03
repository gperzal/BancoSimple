package com.bancosimple.backend.controller;

import com.bancosimple.backend.dto.TarjetaDTO;
import com.bancosimple.backend.mapper.TarjetaMapper;
import com.bancosimple.backend.model.Tarjeta;
import com.bancosimple.backend.service.TarjetaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tarjetas")
public class TarjetaController {

    private final TarjetaService tarjetaService;

    public TarjetaController(TarjetaService tarjetaService) {
        this.tarjetaService = tarjetaService;
    }

    @GetMapping
    public List<TarjetaDTO> getAll() {
        return tarjetaService.findAll().stream()
                .map(TarjetaMapper::toDTO)
                .toList();
    }

    @GetMapping("/{id}")
    public TarjetaDTO getById(@PathVariable Long id) {
        Tarjeta tarjeta = tarjetaService.findById(id)
                .orElseThrow(() -> new RuntimeException("Tarjeta no encontrada"));
        return TarjetaMapper.toDTO(tarjeta);
    }

    @PostMapping
    public TarjetaDTO create(@RequestBody TarjetaDTO dto) {
        Tarjeta saved = tarjetaService.save(TarjetaMapper.toEntity(dto));
        return TarjetaMapper.toDTO(saved);
    }

    @PutMapping("/{id}")
    public TarjetaDTO update(@PathVariable Long id, @RequestBody TarjetaDTO dto) {
        dto.setId(id);
        Tarjeta updated = tarjetaService.save(TarjetaMapper.toEntity(dto));
        return TarjetaMapper.toDTO(updated);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        tarjetaService.deleteById(id);
    }
}
