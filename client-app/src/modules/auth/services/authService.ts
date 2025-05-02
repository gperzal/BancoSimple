import api from "@/services/apiClient";

import { AuthResponse, Credentials, RegisterData } from "../types/authTypes";

export const login = async (data: Credentials): Promise<AuthResponse> => {
  const response = await api.post("/auth/login", data);
  return response.data;
};

export const register = async (data: RegisterData): Promise<AuthResponse> => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

export const validate = async () => {
  return api.get("/auth/validate");
};
