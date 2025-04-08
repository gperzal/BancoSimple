
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notificaciones por correo electrónico</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Decide qué notificaciones recibirás en tu correo electrónico
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-transactions">Transacciones</Label>
              <p className="text-sm text-muted-foreground">
                Recibir notificaciones de transacciones realizadas
              </p>
            </div>
            <Switch id="email-transactions" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-security">Seguridad</Label>
              <p className="text-sm text-muted-foreground">
                Alertas de acceso a tu cuenta y cambios de seguridad
              </p>
            </div>
            <Switch id="email-security" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-promotions">Promociones</Label>
              <p className="text-sm text-muted-foreground">
                Información sobre ofertas y promociones disponibles
              </p>
            </div>
            <Switch id="email-promotions" />
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium">Notificaciones por SMS</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Configura las notificaciones que recibirás por mensaje de texto
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="sms-transactions">Transacciones importantes</Label>
              <p className="text-sm text-muted-foreground">
                Notificaciones de transacciones de alto valor
              </p>
            </div>
            <Switch id="sms-transactions" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="sms-security">Alertas de seguridad</Label>
              <p className="text-sm text-muted-foreground">
                Códigos de verificación y alertas de seguridad críticas
              </p>
            </div>
            <Switch id="sms-security" defaultChecked />
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium">Notificaciones push</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Configura las notificaciones para la aplicación móvil
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="push-all">Todas las transacciones</Label>
              <p className="text-sm text-muted-foreground">
                Recibir notificaciones de todas las transacciones
              </p>
            </div>
            <Switch id="push-all" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="push-news">Noticias y actualizaciones</Label>
              <p className="text-sm text-muted-foreground">
                Información sobre nuevas características y servicios
              </p>
            </div>
            <Switch id="push-news" />
          </div>
        </div>
      </div>
    </div>
  );
}
