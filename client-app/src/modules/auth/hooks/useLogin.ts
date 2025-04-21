import { useCallback } from "react";
import { useAuth } from "@/modules/auth/hooks/useAuth"
import { AuthResponse } from "../types/authTypes";

export const useLogin = (): ((
  email: string,
  password: string
) => Promise<AuthResponse>) => {
  const { login } = useAuth();
  return useCallback(login, [login]);
};
