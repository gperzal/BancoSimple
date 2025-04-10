import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Search, Star } from "lucide-react";
import { TransferContactCard } from "@/modules/dashboard/transactions/components/TransferContactCard";
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
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-2" />
              Contactos Frecuentes
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 mb-6">
              {favoriteContacts.map((c) => (
                <TransferContactCard
                  key={c.id}
                  contact={c}
                  onSelect={(c) => onSelectContact?.(c)}
                />
              ))}
            </div>
          </>
        )}
      </CardContent>
    </div>
  );
}
