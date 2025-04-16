package com.bancosimple.backend.features.transaction.repository;

import com.bancosimple.backend.features.transaction.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {



}