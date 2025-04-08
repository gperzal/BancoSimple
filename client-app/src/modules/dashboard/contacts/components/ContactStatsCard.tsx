// ✅ Archivo: /modules/dashboard/contacts/components/ContactStatsCard.tsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Contact {
  id: number;
  name: string;
  email: string;
  accountNumber: string;
  image: string;
  favorite: boolean;
}

export function ContactStatsCard({ contacts }: { contacts: Contact[] }) {
  const total = contacts.length;
  const favorites = contacts.filter((c) => c.favorite).length;
  const recentTransfers = 12; // Este valor puede venir de props o API si fuera dinámico

  return (
    <Card>
      <CardHeader>
        <CardTitle>Estadísticas de Contacto</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total de Contactos</span>
            <span className="font-semibold">{total}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Contactos Favoritos</span>
            <span className="font-semibold">{favorites}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">
              Transferencias Recientes
            </span>
            <span className="font-semibold">{recentTransfers}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
