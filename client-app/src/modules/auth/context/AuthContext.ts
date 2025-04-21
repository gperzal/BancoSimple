// sin JSX, extensión .ts
import { createContext } from "react";
import { AuthResponse, RegisterData } from "../types/authTypes";

export interface AuthContextType {
  auth: AuthResponse | null;
  login: (email: string, password: string) => Promise<AuthResponse>;
  register: (data: RegisterData) => Promise<AuthResponse>;
  logout: () => void;
  
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
