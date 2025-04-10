import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Search, Star, UserPlus } from "lucide-react";
import AddContactDialog from "@/modules/dashboard/contacts/components/AddContactDialog";
import { ContactCard } from "@/modules/dashboard/contacts/components/ContactCard";
import { TransferTips } from "@/modules/dashboard/transactions/components/TransactionsTips";
import { contacts } from "@/utils/mockData";

interface Contact {
  id: number;
  name: string;
  email: string;
  accountNumber: string;
  favorite: boolean;
  image: string;
}

interface FrequentContactsSectionProps {
  onSelectContact?: (contact: Contact) => void;
}

export function FrequentContactsSection({
  onSelectContact,
}: FrequentContactsSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [contactToEdit, setContactToEdit] = useState<Contact | null>(null);
  const [showAddContact, setShowAddContact] = useState(false);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const favoriteContacts = filteredContacts.filter((c) => c.favorite);

  return (
    <div className="card">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold pb-2">
              Tus Contactos
            </CardTitle>
            <CardDescription>
              Administra y transfiere a tus contactos frecuentes.
            </CardDescription>
          </div>
          <button
            className="button-primary-auto px-6"
            onClick={() => setShowAddContact(true)}
          >
            <UserPlus /> Agregar contacto
          </button>
        </div>
        <div className="relative mt-4">
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
        {favoriteContacts.length > 0 && (
          <>
            <h3 className="font-medium text-lg mb-2 flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-2" />
              Contactos Frecuentes
            </h3>
            <div className="grid gap-4 mb-6">
              {favoriteContacts.map((c) => (
                <ContactCard
                  key={c.id}
                  contact={c}
                  onSelect={(c) => onSelectContact?.(c)}
                  onEdit={(c) => setContactToEdit(c)}
                />
              ))}
            </div>
          </>
        )}
        <TransferTips />
      </CardContent>

      {/* Modal para agregar contacto nuevo */}
      {showAddContact && (
        <AddContactDialog
          open={showAddContact}
          onOpenChange={setShowAddContact}
        />
      )}

      {/* Modal para editar contacto existente */}
      {contactToEdit && (
        <AddContactDialog
          open={!!contactToEdit}
          onOpenChange={(open) => {
            if (!open) setContactToEdit(null);
          }}
          defaultData={contactToEdit}
        />
      )}
    </div>
  );
}
