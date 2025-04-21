// src/modules/auth/hooks/useRegister.ts
import { useCallback } from "react";
import { useAuth } from "../hooks/useAuth";
import { AuthResponse, RegisterData } from "../types/authTypes";


export const useRegister = (): ((data: RegisterData) => Promise<AuthResponse>) => {
  const { register } = useAuth();
  return useCallback(register, [register]);
};
