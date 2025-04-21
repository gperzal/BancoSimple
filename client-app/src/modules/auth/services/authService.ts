import axios from "axios";


import { AuthResponse, Credentials, RegisterData } from "../types/authTypes";

const API = axios.create({ baseURL: import.meta.env.VITE_API_URL });


export const login = (data: Credentials): Promise<AuthResponse> =>
  API.post("/auth/login", data).then(res => res.data);

export const register = (data: RegisterData): Promise<AuthResponse> =>
  API.post("/auth/register", data).then(res => res.data);
