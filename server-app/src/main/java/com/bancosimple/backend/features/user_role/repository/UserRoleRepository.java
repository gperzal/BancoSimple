package com.bancosimple.backend.features.user_role.repository;

import com.bancosimple.backend.features.user_role.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRoleRepository extends JpaRepository<UserRole, Long> {
}