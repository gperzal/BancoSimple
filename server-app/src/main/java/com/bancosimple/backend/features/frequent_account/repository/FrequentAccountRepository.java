package com.bancosimple.backend.features.frequent_account.repository;

import com.bancosimple.backend.features.frequent_account.model.FrequentAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FrequentAccountRepository extends JpaRepository<FrequentAccount, Long> {
}