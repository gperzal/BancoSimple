package com.bancosimple.backend.features.user_product.controller;

import com.bancosimple.backend.exception.ApiException;
import com.bancosimple.backend.features.user.dto.UserDTO;
import com.bancosimple.backend.features.user.service.UserService;
import com.bancosimple.backend.features.user_product.dto.InternalAccountsResponseDTO;
import com.bancosimple.backend.features.user_product.dto.UserProductDTO;
import com.bancosimple.backend.features.user_product.service.UserProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user-products")
@RequiredArgsConstructor
public class UserProductController {

    private final UserProductService service;
    private final UserService userService;

    @GetMapping
    public ResponseEntity<List<UserProductDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserProductDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<UserProductDTO> save(@RequestBody UserProductDTO dto) {
        return ResponseEntity.ok(service.save(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserProductDTO> update(@PathVariable Long id, @RequestBody UserProductDTO dto) {
        return ResponseEntity.ok(service.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/search")
    public ResponseEntity<InternalAccountsResponseDTO> searchInternalAccounts(
            @RequestParam(required = false) String rut,
            @RequestParam(required = false) String email
    ) {
        Optional<UserDTO> optionalUser = userService.findByRutOrEmail(rut, email);

        if (optionalUser.isEmpty()) {
            throw new ApiException("User not found");
        }

        UserDTO user = optionalUser.get();
        List<InternalAccountsResponseDTO.InternalAccountDTO> accounts = service.findInternalAccountsByUserId(user.id());
        String fullName = user.firstName() + " " + user.lastName();
        InternalAccountsResponseDTO response = new InternalAccountsResponseDTO(
                user.documentNumber(),
                user.email(),
                fullName,
                accounts
        );

        return ResponseEntity.ok(response);
    }
}
