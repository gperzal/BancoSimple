// src/modules/dashboard/contacts/types/contactTypes.ts

// 🎯 Categorías de cuentas bancarias frecuentes
export type Category =
  | "CORRIENTE"
  | "CORRIENTE PREMIUM"
  | "CORRIENTE EMPRESARIAL"
  | "VISTA"
  | "AHORRO"
  | "PREPAGO"
  | "OTRO";

// 📦 Entidad base de una cuenta frecuente
export interface FrequentAccount {
  id: number;
  userId: number;
  type: "INTERNAL" | "EXTERNAL";
  category: Category;
  bankName: string;
  accountNumber: string;
  holderName: string;
  rut: string;
  alias: string;
  addedDate: string;
  favorite: boolean;
}

// ✍️ Para crear nuevas cuentas
export type CreateFrequentAccountData = Omit<FrequentAccount, "id">;

// 🔄 Para editar o usar en formularios
export type ContactFormData = CreateFrequentAccountData & {
  id?: number;
  favoriteProductId?: number;
};

// 🛠️ Update usa la misma estructura
export type UpdateFrequentAccountData = ContactFormData;

// 🔍 Cuentas disponibles al buscar un RUT de cliente BancoSimple
export interface InternalAccountResult {
  id: number;
  name: string;
  category: string;
  productNumber: string;
}

// 🧾 Resultado del backend al buscar por RUT
export interface UserSearchResult {
  fullName: string;
  email: string;
  rut: string;
  internalAccounts: InternalAccountResult[];
}

// 🧠 Mapeo de nombres comerciales de productos a categorías bancarias internas
export const NameToCategoryMap: Record<string, Category> = {
  "Cuenta Corriente Premium": "CORRIENTE",
  "Cuenta Vista": "VISTA",
  "Cuenta de Ahorro": "AHORRO",
  "Cuenta Prepago Básica": "PREPAGO",
  "Cuenta Empresarial": "CORRIENTE EMPRESARIAL",
  "Otra cuenta": "OTRO",
};
