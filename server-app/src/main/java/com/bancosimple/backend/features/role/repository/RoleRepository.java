package com.bancosimple.backend.features.role.repository;

import com.bancosimple.backend.features.role.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
