"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Search, UserPlus } from "lucide-react";
import AddContactDialog from "@/modules/dashboard/contacts/components/AddContactDialog";
import { ContactCard } from "@/modules/dashboard/contacts/components/ContactCard";
import { ContactStatsCard } from "@/modules/dashboard/contacts/components/ContactStatsCard";
import {
  getFrequentAccounts,
  getFrequentAccountsAll,
} from "@/modules/dashboard/contacts/services/contactService";
import type { ContactFormData } from "../types/ContactTypes";

export function ContactsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddContact, setShowAddContact] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [contactToEdit, setContactToEdit] = useState<ContactFormData | null>(
    null
  );

  const [contacts, setContacts] = useState<ContactFormData[]>([]);
  const [allContacts, setAllContacts] = useState<ContactFormData[]>([]);
  const [favorites, setFavorites] = useState<ContactFormData[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const [all, fav] = await Promise.all([
          getFrequentAccountsAll(),
          getFrequentAccounts()
        ]);

        setAllContacts(all);
        setFavorites(fav);
        setContacts(showAll ? all : fav);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, [showAll]);

  const handleToggleFavorite = (id: number) => {
    setContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, favorite: !c.favorite } : c))
    );
    setAllContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, favorite: !c.favorite } : c))
    );
    setFavorites((prev) =>
      prev.map((c) => (c.id === id ? { ...c, favorite: !c.favorite } : c))
    );
  };

  const handleDelete = (id: number) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
    setAllContacts((prev) => prev.filter((c) => c.id !== id));
    setFavorites((prev) => prev.filter((c) => c.id !== id));
  };

  const handleSaveContact = (formData: ContactFormData) => {
    console.log("Saving contact:", formData);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.alias.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.accountNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid gap-6 md:grid-cols-4">
      <Card className="md:col-span-3">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-semibold">
                Tus Contactos
              </CardTitle>
              <CardDescription className="mt-2">
                Administra y transfiere a tus contactos frecuentes.
              </CardDescription>
            </div>
            <button
              className="button-primary-auto sm:px-6 px-3 py-2"
              onClick={() => setShowAddContact(true)}
            >
              <UserPlus className="sm:mr-2" />
              <span className="hidden sm:inline">Agregar contacto</span>
            </button>
          </div>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar contactos..."
              className="input-primary pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mt-2">
            <h3 className="font-medium text-lg mb-2">
              {showAll ? "Todos los Contactos" : "Contactos Favoritos"}
            </h3>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={showAll}
                onChange={() => setShowAll(!showAll)}
                className="form-checkbox"
              />
              Ver todos
            </label>
          </div>

          <div className="grid gap-4">
            {filteredContacts.length > 0 ? (
              filteredContacts.map((c) => (
                <ContactCard
                  key={c.id!}
                  contact={c}
                  onEdit={() => setContactToEdit(c)}
                  onDelete={() => handleDelete(c.id!)}
                  onToggleFavorite={(id) => handleToggleFavorite(id)}
                />
              ))
            ) : (
              <p className="text-center py-4 text-muted-foreground">
                No se encontraron contactos.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <ContactStatsCard
          total={allContacts.length}
          favorites={favorites.length}
        />
      </div>

      <AddContactDialog
        open={showAddContact || contactToEdit !== null}
        onOpenChange={(open) => {
          setShowAddContact(open);
          if (!open) setContactToEdit(null);
        }}
        defaultData={contactToEdit ?? undefined}
        onSave={handleSaveContact}
      />
    </div>
  );
}
