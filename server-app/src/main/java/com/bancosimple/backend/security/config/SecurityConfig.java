package com.bancosimple.backend.security.config;

import com.bancosimple.backend.security.jwt.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(withDefaults())
                .csrf(AbstractHttpConfigurer::disable)
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(auth -> auth
                                .requestMatchers("/swagger-ui.html", "/swagger-ui/**", "/v3/api-docs/**", "/openapi.yaml").permitAll()
                                .requestMatchers("/api/auth/login", "/api/auth/register").permitAll()
                                .requestMatchers("/api/auth/validate").authenticated()
                                .requestMatchers("/api/products/**").permitAll()
                                .requestMatchers(
                                        "/api/dashboard/client/**",
                                        "/api/frequent-accounts/**",
                                        "/api/transactions/**",
                                        "/api/cards/**",
                                        "/api/points-history/**",
                                        "/api/loyalty-points/**",
                                        "/api/contacts/**",
                                        "/api/status/**",
                                        "/api/address/**"
                                ).hasAnyRole("CLIENT", "ADMIN")
                                .requestMatchers("/api/dashboard/executive/**").hasRole("EXECUTIVE")
                                .requestMatchers(
                                        "/api/dashboard/admin/**",
                                        "/api/roles/**",
                                        "/api/user-roles/**",
                                        "/api/user-promotion/**",
                                        "/api/promotion/**",
                                        "/api/activity-log/**",
                                        "/api/backup-log/**"
                                ).hasRole("ADMIN")
                                .requestMatchers("/api/user/**").hasAnyRole("EXECUTIVE", "ADMIN")
                                .anyRequest().authenticated()
                )
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}
