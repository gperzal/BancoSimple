// src/modules/dashboard/products/types/ProductTypes.ts

export enum ProductTypeEnum {
  ACCOUNT = "ACCOUNT",
  CARD = "CARD",
  LOAN = "LOAN",
  INVESTMENT = "INVESTMENT",
  INSURANCE = "INSURANCE",
}


export enum ProductSegmentEnum {
  PERSONAL = "PERSONAL",
  SME = "SME",
  CORPORATE = "CORPORATE",
}

// Actualizamos la interfaz ProductCategory
export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  productType: ProductTypeEnum;
  segment: ProductSegmentEnum;
  features: string[];
  rate?: string;
  isNew?: boolean;
  isPopular?: boolean;
  isPromo?: boolean;
}
