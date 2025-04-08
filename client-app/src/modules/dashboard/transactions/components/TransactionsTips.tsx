// ✅ Archivo: /modules/dashboard/transfers/components/TransferTips.tsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export function TransferTips() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-500" /> Consejos Útiles
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground space-y-2">
        <p>
          ✅ Verifica siempre el nombre del destinatario antes de transferir.
        </p>
        <p>🔒 Nunca compartas tu contraseña o códigos de verificación.</p>
        <p>
          📅 Guarda tus contactos frecuentes para agilizar futuras operaciones.
        </p>
      </CardContent>
    </Card>
  );
}
