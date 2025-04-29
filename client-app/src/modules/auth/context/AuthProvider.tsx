// src/context/AuthProvider.tsx
import { ReactNode, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import * as authService from "../services/authService";
import { AuthResponse, RegisterData } from "../types/authTypes";
import { setLogoutCallback } from "../../../services/apiClient";

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
    window.location.href = "/login"; // o router.push("/login")
  };

  useEffect(() => {
    // Registramos el logout para que apiClient lo pueda usar
    setLogoutCallback(logout);
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
