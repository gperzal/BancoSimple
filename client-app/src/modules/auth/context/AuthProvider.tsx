// src/context/AuthProvider.tsx
import { ReactNode, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import * as authService from "../services/authService";
import { AuthResponse, RegisterData } from "../types/authTypes";
import { setLogoutCallback } from "../../../services/apiClient";
import { notifySessionExpired } from "@/utils/notifications";
import { isNetworkError, isUnauthorized } from "@/utils/httpErrors"; // 👈 profesional

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthResponse | null>(() => {
    const stored = localStorage.getItem("auth");
    return stored ? JSON.parse(stored) : null;
  });

  const handleAuth = (data: AuthResponse) => {
    setAuth(data);
    localStorage.setItem("auth", JSON.stringify(data));
  };

  const login = async (
    email: string,
    password: string
  ): Promise<AuthResponse> => {
    const data = await authService.login({ email, password });
    handleAuth(data);
    return data;
  };

  const register = async (data: RegisterData): Promise<AuthResponse> => {
    const resp = await authService.register(data);
    handleAuth(resp);
    return resp;
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("auth");

    if (window.location.pathname !== "/login") {
      window.location.href = "/login";
    }
  };

  useEffect(() => {
    setLogoutCallback(logout);

    const validateSession = async () => {
      const raw = localStorage.getItem("auth");
      if (!raw) {
        notifySessionExpired();
        setTimeout(() => logout(), 100);
        return;
      }

      try {
        await authService.validate(); // debe lanzar si token vencido o backend reiniciado
      } catch (error) {
        if (isUnauthorized(error) || isNetworkError(error)) {
          notifySessionExpired();
          setTimeout(() => logout(), 100); // Permitir render del toast
        } else {
          console.error(
            "[AuthProvider] Error inesperado al validar sesión:",
            error
          );
        }
      }
    };

    validateSession(); // Al cargar
    const interval = setInterval(validateSession, 300_000); // Cada 5 minutos
    return () => clearInterval(interval);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        isAuthenticated: !!auth,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
