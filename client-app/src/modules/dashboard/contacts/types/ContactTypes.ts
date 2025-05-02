// src/modules/dashboard/contacts/types/contactTypes.ts

export type Category =
  | "CORRIENTE"
  | "VISTA"
  | "AHORRO"
  | "PREPAGO"
  | "OTRO";

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

export type CreateFrequentAccountData = Omit<FrequentAccount, "id">;

export type ContactFormData = CreateFrequentAccountData & {
  id?: number;
  favoriteProductId?: number;
};

export type UpdateFrequentAccountData = ContactFormData;

export interface UserSearchResult {
  firstName: string;
  lastName: string;
  email: string;
  rut: string;
  internalAccounts: InternalAccount[];
  externalAccounts: ExternalAccount[];
}


