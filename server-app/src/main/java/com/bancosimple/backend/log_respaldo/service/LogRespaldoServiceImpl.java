package com.bancosimple.backend.log_respaldo.service;

import com.bancosimple.backend.log_respaldo.model.LogRespaldo;
import com.bancosimple.backend.log_respaldo.repository.LogRespaldoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LogRespaldoServiceImpl implements LogRespaldoService {

    private final LogRespaldoRepository repository;

    public LogRespaldoServiceImpl(LogRespaldoRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<LogRespaldo> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<LogRespaldo> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public LogRespaldo save(LogRespaldo log) {
        return repository.save(log);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
