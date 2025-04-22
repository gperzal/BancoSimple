package com.bancosimple.backend.features.user.dto;

import java.util.List;

public record UserAccountDTO(
        String firstName,
        String lastName,
        String email,
        String documentNumber,
        List<String> accountNumbers
) {}
