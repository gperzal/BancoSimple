package com.bancosimple.backend.auth;

import com.bancosimple.backend.security.dto.LoginRequest;
import com.bancosimple.backend.security.dto.RegisterRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class LoginControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void shouldLoginSuccessfullyAfterRegistration() throws Exception {
        String email = "john" + System.currentTimeMillis() + "@example.com";
        String password = "securepassword";

        // 1. Registro del usuario
        RegisterRequest registerRequest = new RegisterRequest();
        registerRequest.setFirstName("John");
        registerRequest.setLastName("Doe");
        registerRequest.setEmail(email);
        registerRequest.setPasswordHash(password);
        registerRequest.setPhone("+56912345678");
        registerRequest.setDocumentType("RUT");
        registerRequest.setDocumentNumber("12345678-9");
        registerRequest.setBirthDate(LocalDate.of(1990, 1, 1));

        mockMvc.perform(post("/api/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(registerRequest)))
                .andExpect(status().isOk());

        // 2. Intento de login con las credenciales registradas
        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setEmail(email);
        loginRequest.setPassword(password);

        mockMvc.perform(post("/api/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(loginRequest)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token").isNotEmpty())
                .andExpect(jsonPath("$.email").value(email))
                .andExpect(jsonPath("$.role").isNotEmpty());
    }
}
