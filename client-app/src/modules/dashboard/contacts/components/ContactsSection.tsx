import { useState } from "react";
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
import { contacts as mockContacts } from "@/utils/mockData";

interface Contact {
  id: number;
  name: string;
  email: string;
  accountNumber: string;
  favorite: boolean;
  image: string;
}

export function ContactsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddContact, setShowAddContact] = useState(false);
  const [contactToEdit, setContactToEdit] = useState<Contact | null>(null);
  const [contacts, setContacts] = useState<Contact[]>(mockContacts);

  const handleToggleFavorite = (id: number) => {
    setContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, favorite: !c.favorite } : c))
    );
  };

  const handleDelete = (id: number) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase())
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
          <h3 className="font-medium text-lg mb-2">Todos los Contactos</h3>
          <div className="grid gap-4">
            {filteredContacts.length > 0 ? (
              filteredContacts.map((c) => (
                <ContactCard
                  key={c.id}
                  contact={c}
                  onEdit={() => setContactToEdit(c)}
                  onDelete={() => handleDelete(c.id)}
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
        <ContactStatsCard contacts={contacts} />
      </div>

      <AddContactDialog
        open={showAddContact || contactToEdit !== null}
        onOpenChange={(open) => {
          setShowAddContact(open);
          if (!open) setContactToEdit(null);
        }}
        defaultData={contactToEdit ?? undefined}
      />
    </div>
  );
}
