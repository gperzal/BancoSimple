// src/utils/formatBankName.ts

export function formatBankName(bank: string): string {
    return bank
      .toLowerCase()
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }
  