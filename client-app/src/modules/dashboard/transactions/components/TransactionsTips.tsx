import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export function TransferTips() {
  return (
    <Card className="card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          Consejos para transferencias seguras
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground space-y-2 leading-relaxed">
        <p>
          ✅ Revisa el nombre y número de cuenta antes de confirmar una
          transferencia.
        </p>
        <p>
          🔒 Nunca compartas tus contraseñas ni códigos de verificación por
          ningún medio.
        </p>
        <p>
          📅 Guarda a tus contactos frecuentes para hacer transferencias más
          rápidas y seguras.
        </p>
        <p className="font-medium text-destructive">
          ❓ Si dudas de la identidad del destinatario, detén la transferencia.
        </p>
      </CardContent>
    </Card>
  );
}
