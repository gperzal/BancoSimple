package com.bancosimple.backend.log_respaldo.service;

import com.bancosimple.backend.log_respaldo.model.LogRespaldo;

import java.util.List;
import java.util.Optional;

public interface LogRespaldoService {
    List<LogRespaldo> findAll();
    Optional<LogRespaldo> findById(Long id);
    LogRespaldo save(LogRespaldo log);
    void deleteById(Long id);
}
