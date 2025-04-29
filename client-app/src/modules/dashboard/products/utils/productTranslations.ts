// src/utils/productTranslations.ts

import { ProductTypeEnum, ProductSegmentEnum } from "@/modules/dashboard/products/types/ProductTypes";

export const ProductTypeTranslations: Record<ProductTypeEnum, string> = {
  [ProductTypeEnum.ACCOUNT]: "Cuentas",
  [ProductTypeEnum.CARD]: "Tarjetas",
  [ProductTypeEnum.LOAN]: "Préstamos",
  [ProductTypeEnum.INVESTMENT]: "Inversiones",
  [ProductTypeEnum.INSURANCE]: "Seguros",
};

export const ProductSegmentTranslations: Record<ProductSegmentEnum, string> = {
  [ProductSegmentEnum.PERSONAL]: "Personas",
  [ProductSegmentEnum.SME]: "Pymes",
  [ProductSegmentEnum.CORPORATE]: "Empresas",
};
