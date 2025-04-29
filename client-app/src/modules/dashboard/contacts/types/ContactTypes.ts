// src/modules/dashboard/contacts/types/contactTypes.ts

export type Category =
  | "CORRIENTE"
  | "VISTA"
  | "AHORRO"
  | "PREPAGO"
  | "OTRO";

export interface InternalAccount {
  id: number;
  name: string;
  category: Category;
  productNumber: string;
}

export interface ExternalAccount {
  id: number;
  bankName: string;
  category: Category;
  accountNumber: string;
  holderName: string;
}

// Para el listado de cuentas frecuentes
export interface FrequentAccount {
  id: number;
  type: "INTERNAL" | "EXTERNAL";
  category: Category;
  alias: string;
  active: boolean;
  // INTERNAL only
  favoriteProductId?: number;
  // EXTERNAL only
  externalBankName?: string;
  externalAccountNumber?: string;
  externalHolderName?: string;
}

export type CreateFrequentAccountData = Omit<FrequentAccount, "id">;
export type UpdateFrequentAccountData = CreateFrequentAccountData;

/** Data que maneja el formulario de Add/Edit */
export type ContactFormData = CreateFrequentAccountData & {
  id?: number;
};

/** Resultado al buscar un cliente interno por RUT */
export interface UserSearchResult {
  firstName: string;
  lastName: string;
  email: string;
  rut: string;
  internalAccounts: InternalAccount[];
  externalAccounts: ExternalAccount[];
}
