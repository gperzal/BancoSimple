package com.bancosimple.backend.features.role.shared;

public class RoleUtils {
    public static String getRoleName(Long rolId) {
        return switch (rolId.intValue()) {
            case 1 -> "ADMIN";
            case 2 -> "EXECUTIVE";
            default -> "CLIENT";
        };
    }
}