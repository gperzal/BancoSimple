package com.bancosimple.backend.features.card.repository;

import com.bancosimple.backend.features.card.model.Card;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepository extends JpaRepository<Card, Long> {
    boolean existsByCardNumber(String cardNumber);
}
