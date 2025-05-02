// src/services/contactService.ts
import api from "@/services/apiClient";
import { ContactFormData } from "@/modules/dashboard/contacts/types/ContactTypes";

// Obtener todas las cuentas frecuentes del usuario
export async function getFrequentAccountsAll(): Promise<ContactFormData[]> {
  const response = await api.get("/frequent-accounts/");
  return response.data;
}

// Obtener todas las cuentas frecuentes favoritas del usuario
export async function getFrequentAccounts(): Promise<ContactFormData[]> {
  const response = await api.get("/frequent-accounts/favorite");
  return response.data;
}

// Obtener una cuenta frecuente por su ID
export const getFrequentAccountById = async (id: number): Promise<ContactFormData> => {
  const response = await api.get(`/frequent-accounts/${id}`);
  return response.data;
};

// Crear una nueva cuenta frecuente
export const createFrequentAccount = async (payload: ContactFormData): Promise<ContactFormData> => {
  const response = await api.post("/frequent-accounts", payload);
  return response.data;
};

// Actualizar una cuenta frecuente existente
export const updateFrequentAccount = async (id: number, payload: ContactFormData): Promise<ContactFormData> => {
  const response = await api.put(`/frequent-accounts/${id}`, payload);
  return response.data;
};

// Eliminar una cuenta frecuente
export const deleteFrequentAccount = async (id: number): Promise<void> => {
  await api.delete(`/frequent-accounts/${id}`);
};

// Obtener bancos disponibles para llenar el select
export const getBankNames = async (): Promise<string[]> => {
  const response = await api.get("/frequent-accounts/banks");
  return response.data;
};

// Obtener categorías disponibles para llenar el select
export const getAccountCategories = async (): Promise<string[]> => {
  const response = await api.get("/frequent-accounts/categories");
  return response.data;
};


// Buscar cuentas internas por RUT
export async function searchInternalAccountsByRut(rut: string) {
  const response = await api.get(`/user-products/search`, { params: { rut } });
  return response.data;
}