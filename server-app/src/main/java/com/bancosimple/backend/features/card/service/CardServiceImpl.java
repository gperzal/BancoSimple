package com.bancosimple.backend.features.card.service;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.features.card.dto.CardDTO;
import com.bancosimple.backend.features.card.mapper.CardMapper;
import com.bancosimple.backend.features.card.model.Card;
import com.bancosimple.backend.features.card.repository.CardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CardServiceImpl implements CardService {

    private final CardRepository cardRepository;

    @Override
    public List<CardDTO> findAll() {
        return cardRepository.findAll().stream()
                .map(CardMapper::toDTO)
                .toList();
    }

    @Override
    public CardDTO findById(Long id) {
        return cardRepository.findById(id)
                .map(CardMapper::toDTO)
                .orElseThrow(() -> new ApiException("Card not found with ID: " + id));
    }

    @Override
    public CardDTO save(CardDTO dto) {
        if (cardRepository.existsByCardNumber(dto.cardNumber())) {
            throw new ApiException("A card with this number already exists");
        }
        return CardMapper.toDTO(
                cardRepository.save(CardMapper.toEntity(dto))
        );
    }

    @Override
    public CardDTO update(Long id, CardDTO dto) {
        Card card = cardRepository.findById(id)
                .orElseThrow(() -> new ApiException("Card not found with ID: " + id));

        card.setCardType(dto.cardType());
        card.setPrintedName(dto.printedName());
        card.setActive(dto.active());
        card.setStateId(dto.stateId());

        return CardMapper.toDTO(cardRepository.save(card));
    }

    @Override
    public void deleteById(Long id) {
        cardRepository.deleteById(id);
    }
}
