
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, AlertCircle } from "lucide-react";

export function SecuritySettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Autenticación de dos factores</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Añade una capa adicional de seguridad a tu cuenta
        </p>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="2fa">Activar autenticación de dos factores</Label>
            <p className="text-sm text-muted-foreground">
              Aumenta la seguridad de tu cuenta requiriendo un código adicional al iniciar sesión
            </p>
          </div>
          <Switch id="2fa" />
        </div>
        
        <div className="mt-4">
          <Button variant="outline">Configurar autenticación de dos factores</Button>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium">Sesiones activas</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Gestiona tus sesiones activas en otros dispositivos
        </p>
        
        <Alert variant="default" className="mb-4">
          <Shield className="h-4 w-4" />
          <AlertDescription>
            Tienes 2 sesiones activas en otros dispositivos
          </AlertDescription>
        </Alert>
        
        <Button variant="secondary">Ver y gestionar sesiones</Button>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium">Contraseña</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Actualiza tu contraseña periódicamente para mayor seguridad
        </p>
        
        <Alert variant="default" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Tu contraseña no se ha actualizado en los últimos 90 días
          </AlertDescription>
        </Alert>
        
        <Button>Cambiar contraseña</Button>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium">Opciones de seguridad adicionales</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Configura opciones adicionales de seguridad
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="login-notifications">Notificaciones de inicio de sesión</Label>
              <p className="text-sm text-muted-foreground">
                Recibe notificaciones cuando tu cuenta sea accedida desde un nuevo dispositivo
              </p>
            </div>
            <Switch id="login-notifications" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="suspicious-activity">Alertas de actividad sospechosa</Label>
              <p className="text-sm text-muted-foreground">
                Recibe alertas cuando se detecte actividad inusual en tu cuenta
              </p>
            </div>
            <Switch id="suspicious-activity" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="require-password">Requerir contraseña para transacciones</Label>
              <p className="text-sm text-muted-foreground">
                Solicitar contraseña para confirmar transacciones importantes
              </p>
            </div>
            <Switch id="require-password" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );
}
