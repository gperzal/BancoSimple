package com.bancosimple.backend.features.frequent_account.repository;

import com.bancosimple.backend.features.frequent_account.model.FrequentAccount;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FrequentAccountRepository extends JpaRepository<FrequentAccount, Long> {
    List<FrequentAccount> findAllByUserId(Long userId);
}