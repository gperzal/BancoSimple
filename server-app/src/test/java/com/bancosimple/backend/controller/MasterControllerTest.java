package com.bancosimple.backend.controller;

import com.bancosimple.backend.features.user.dto.UserDTO;
import com.bancosimple.backend.features.user.service.UserService;
import com.bancosimple.backend.features.backup_log.service.BackupLogService;
import com.bancosimple.backend.features.address.service.AddressService;
import com.bancosimple.backend.features.activity_log.service.ActivityLogService;
import com.bancosimple.backend.exception.ApiException;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Stream;

import static java.util.Collections.emptyList;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@ActiveProfiles("test")
class MasterControllerTest {

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    /* ==== Mocks de servicios usados en los endpoints ==== */
    @MockBean private UserService userService;
    @MockBean private BackupLogService backupLogService;
    @MockBean private AddressService   addressService;
    @MockBean private ActivityLogService activityLogService;
    /*  Agrega @MockBean ...Service para otros recursos que
        vayan arrojando 500 durante la prueba                 */

    /* ==== Lista de endpoints GET (colección) ==== */
    private static final String[] LIST_ENDPOINTS = {
            "/api/activity-logs",
            "/api/addresses",
            "/api/backup-logs",
            "/api/cards",
            "/api/frequent-accounts",
            "/api/loyalty-points",
            "/api/points-history",
            "/api/products",
            "/api/promotions",
            "/api/roles",
            "/api/statuses",
            "/api/transactions",
            "/api/users",
            "/api/user-promotions",
            "/api/user-roles"
    };

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(context)
                .apply(springSecurity())
                .build();
    }

    /* ---------- GET /colección ---------- */
    @ParameterizedTest(name = "[{index}] GET {0}")
    @MethodSource("listEndpoints")          //  ←  aquí
    @WithMockUser(username = "smoke@x.cl", roles = "CLIENT")
    void shouldReturn200ForList(String endpoint) throws Exception {
        mockForList(endpoint);
        mockMvc.perform(get(endpoint).accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk());
    }

    /* ---------- GET /{id} ---------- */
    @ParameterizedTest(name = "[{index}] GET {0}/1")
    @MethodSource("listEndpoints")          //  ←  aquí también
    @WithMockUser(username = "smoke@x.cl", roles = "CLIENT")
    void shouldReturn200or404ForDetail(String endpoint) throws Exception {
        mockForDetail(endpoint);
        mockMvc.perform(get(endpoint + "/1").accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(res ->
                        assertThat(res.getResponse().getStatus()).isIn(200, 404));
    }

    /* ---------- proveedor para MethodSource ---------- */
    static Stream<String> listEndpoints() {
        return Stream.of(LIST_ENDPOINTS);
    }

    /* ======================================================
       ================   MOCK HELPERS   ====================
       ====================================================== */

    /** Simula respuestas para GET /colección */
    private void mockForList(String ep) {

        if (ep.equals("/api/backup-logs")) {
            when(backupLogService.findAll()).thenReturn(emptyList());
        }
        else if (ep.equals("/api/addresses")) {
            when(addressService.findAll()).thenReturn(emptyList());
        }
        else if (ep.equals("/api/activity-logs")) {
            when(activityLogService.findAll()).thenReturn(emptyList());
        }
        else if (ep.equals("/api/users")) {
            when(userService.findAll()).thenReturn(
                    List.of(sampleUserDto()));
        }
        /*  …añade else‑if para otros recursos que
            necesiten retourno 200 y actualmente dan 500    */
    }

    /** Simula respuestas para GET /{id} */
    private void mockForDetail(String ep) {

        if (ep.equals("/api/backup-logs")) {
            // provocamos 404
            when(backupLogService.findById(1L))
                    .thenThrow(new ApiException("Not found"));
        }
        else if (ep.equals("/api/addresses")) {
            when(addressService.findById(1L))
                    .thenThrow(new ApiException("Not found"));
        }
        else if (ep.equals("/api/activity-logs")) {
            when(activityLogService.findById(1L))
                    .thenThrow(new ApiException("Not found"));
        }
        else if (ep.equals("/api/users")) {
            when(userService.findById(anyLong()))
                    .thenReturn(sampleUserDto()); // devolverá 200
        }
        /*  …añade else‑if para otros recursos según
            quieras 200 (devuelves DTO) o 404 (lanzas ApiException) */
    }

    private UserDTO sampleUserDto() {
        return new UserDTO(
                1L, "uuid‑1", "Jane", "Doe", "jane@x.cl", "+56912345678",
                "RUT", "12345678‑9", null,
                LocalDate.of(1990, 1, 1), LocalDateTime.now(),
                1, List.of("CLIENT"));
    }
}
