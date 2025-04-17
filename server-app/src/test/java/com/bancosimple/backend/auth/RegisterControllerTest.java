package com.bancosimple.backend.auth;

import org.springframework.core.env.Environment;
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
public class RegisterControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private Environment environment;

    @Test
    void shouldRegisterNewUserSuccessfully() throws Exception {
        RegisterRequest request = new RegisterRequest();
        request.setFirstName("John");
        request.setLastName("Doe");
        request.setEmail("john" + System.currentTimeMillis() + "@example.com");
        request.setPasswordHash("securepassword");
        request.setPhone("+56912345678");
        request.setDocumentType("RUT");
        request.setDocumentNumber("12345678-9");
        request.setBirthDate(LocalDate.of(1990, 1, 1));

        mockMvc.perform(post("/api/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(content().string("User successfully registered"));
    }
}
