import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
interface ContactStatsCardProps  {
  total: number;
  favorites: number;
}


export function ContactStatsCard({ total, favorites }: ContactStatsCardProps) {

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
        </div>
      </CardContent>
    </Card>
  );
}
