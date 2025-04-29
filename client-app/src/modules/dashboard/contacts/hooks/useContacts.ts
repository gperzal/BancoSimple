// src/modules/dashboard/contacts/hooks/useContacts.ts
import { useEffect, useState } from "react";
import {
  getBankNames,
  getAccountCategories,
  getFrequentAccounts,
  createFrequentAccount,
  deleteFrequentAccount,
} from "@/modules/dashboard/contacts/services/contactService";

import type { ContactFormData } from "../types/ContactTypes";

export function useContacts() {
  const [banks, setBanks] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [contacts, setContacts] = useState<ContactFormData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [banksList, categoriesList, contactsList] = await Promise.all([
          getBankNames(),
          getAccountCategories(),
          getFrequentAccounts(),
        ]);
        setBanks(banksList);
        setCategories(categoriesList);
        setContacts(contactsList);
      } catch (error) {
        console.error("[useContacts] Error al cargar datos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const refreshContacts = async () => {
    try {
      const list = await getFrequentAccounts();
      setContacts(list);
    } catch (error) {
      console.error("[useContacts] Error al refrescar contactos:", error);
    }
  };

  const addContact = async (contact: ContactFormData) => {
    await createFrequentAccount(contact);
    await refreshContacts();
  };

  const removeContact = async (id: number) => {
    await deleteFrequentAccount(id);
    await refreshContacts();
  };

  return {
    banks,
    categories,
    contacts,
    loading,
    addContact,
    removeContact,
    refreshContacts,
  };
}
