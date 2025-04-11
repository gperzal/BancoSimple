package com.bancosimple.backend.tarjeta.service;

import com.bancosimple.backend.tarjeta.model.Tarjeta;
import com.bancosimple.backend.tarjeta.repository.TarjetaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TarjetaServiceImpl implements TarjetaService {

    private final TarjetaRepository tarjetaRepository;

    public TarjetaServiceImpl(TarjetaRepository tarjetaRepository) {
        this.tarjetaRepository = tarjetaRepository;
    }

    @Override
    public List<Tarjeta> findAll() {
        return tarjetaRepository.findAll();
    }

    @Override
    public Optional<Tarjeta> findById(Long id) {
        return tarjetaRepository.findById(id);
    }

    @Override
    public Tarjeta save(Tarjeta tarjeta) {
        return tarjetaRepository.save(tarjeta);
    }

    @Override
    public void deleteById(Long id) {
        tarjetaRepository.deleteById(id);
    }
}
