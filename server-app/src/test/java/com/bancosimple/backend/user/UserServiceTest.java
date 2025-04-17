package com.bancosimple.backend.user;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.features.user.dto.UserDTO;
import com.bancosimple.backend.features.user.model.User;
import com.bancosimple.backend.features.user.repository.UserRepository;
import com.bancosimple.backend.features.user.service.UserServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDate;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserServiceImpl userService;

    private User mockUser;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);

        mockUser = User.builder()
                .id(1L)
                .firstName("John")
                .lastName("Doe")
                .email("john@test.com")
                .passwordHash("pass")
                .birthDate(LocalDate.of(1990, 1, 1))
                .build();
    }

    @Test
    void shouldReturnUserByEmail() {
        when(userRepository.findByEmail("john@test.com")).thenReturn(Optional.of(mockUser));

        UserDTO result = userService.findByEmail("john@test.com");

        assertThat(result).isNotNull();
        assertThat(result.email()).isEqualTo("john@test.com");
        verify(userRepository).findByEmail("john@test.com");
    }

    @Test
    void shouldThrowExceptionWhenEmailNotFound() {
        when(userRepository.findByEmail("notfound@test.com")).thenReturn(Optional.empty());

        assertThrows(ApiException.class, () -> userService.findByEmail("notfound@test.com"));

        verify(userRepository).findByEmail("notfound@test.com");
    }
}
