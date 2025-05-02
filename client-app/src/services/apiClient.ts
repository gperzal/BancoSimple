// src/services/apiClient.ts
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10_000,
});

// Inyectar token automáticamente
api.interceptors.request.use((config) => {
  const authString = localStorage.getItem("auth");
  if (authString) {
    const { token } = JSON.parse(authString);
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Función que vamos a "inyectar" después
let logoutCallback: (() => void) | null = null;

export const setLogoutCallback = (callback: () => void) => {
  logoutCallback = callback;
};

// Manejo global de errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      logoutCallback?.(); 
    }
    return Promise.reject(error);
  }
);

export default api;
