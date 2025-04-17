package com.bancosimple.backend.user;

import com.bancosimple.backend.features.user.model.User;
import com.bancosimple.backend.features.user.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@ActiveProfiles("test")
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    void shouldFindUserByEmail() {
        User user = new User();
        user.setFirstName("Test");
        user.setLastName("User");
        user.setEmail("test@example.com");
        user.setPasswordHash("hashed_password");

        userRepository.save(user);

        var optionalUser = userRepository.findByEmail("test@example.com");

        assertThat(optionalUser).isPresent();
        assertThat(optionalUser.get().getEmail()).isEqualTo("test@example.com");
    }

    @Test
    void shouldReturnTrueIfEmailExists() {
        User user = new User();
        user.setEmail("exists@mail.com");
        user.setPasswordHash("pass");
        userRepository.save(user);

        boolean exists = userRepository.existsByEmail("exists@mail.com");

        assertThat(exists).isTrue();
    }

    @Test
    void shouldReturnFalseIfEmailDoesNotExist() {
        boolean exists = userRepository.existsByEmail("notfound@mail.com");

        assertThat(exists).isFalse();
    }
}
