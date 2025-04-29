// src/modules/dashboard/products/services/productsService.ts

import api from "@/services/apiClient";
import type { ProductCategory } from "@/modules/dashboard/products/types/ProductTypes";

export const getAllProducts = async (): Promise<ProductCategory[]> => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw new Error("No se pudieron obtener los productos.");
  }
};
