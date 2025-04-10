import { Info } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function TransferTips() {
  return (
    <Card className="card popover">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Info className="h-5 w-5 text-blue-500" />
          Consejos para transferencias seguras
        </CardTitle>
      </CardHeader>
      <CardContent className="popover space-y-4 text-sm text-muted-foreground leading-relaxed">
        <div>
          <p className="font-medium text-foreground">🧾 Verificación previa</p>
          <ul className="list-disc list-inside pl-2 mt-1 space-y-1">
            <li>
              Asegúrate de que el nombre y número de cuenta del destinatario
              sean correctos.
            </li>
            <li>Si tienes dudas, valida los datos antes de continuar.</li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-foreground">
            🔐 Seguridad de tu cuenta
          </p>
          <ul className="list-disc list-inside pl-2 mt-1 space-y-1">
            <li>Nunca compartas tus contraseñas ni códigos de verificación.</li>
            <li>
              Desconfía de solicitudes urgentes por correo o redes sociales.
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-foreground">📁 Organización</p>
          <ul className="list-disc list-inside pl-2 mt-1 space-y-1">
            <li>
              Guarda a tus contactos frecuentes para transferencias más ágiles.
            </li>
            <li>
              Etiqueta y categoriza tus transferencias para mejor control.
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-destructive">
            ⚠️ Detén la transferencia si:
          </p>
          <ul className="list-disc list-inside pl-2 mt-1 space-y-1 text-destructive">
            <li>El destinatario no te genera confianza.</li>
            <li>Te solicitan transferencias sospechosas o repetidas.</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
