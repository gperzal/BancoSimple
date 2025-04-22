"use client"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import type { NotificationSettings as NotificationSettingsType } from "../types/SettingsTypes"

interface NotificationSettingsProps {
  settings: NotificationSettingsType
  onSettingChange: (category: string, key: string, value: boolean) => void
  disabled?: boolean
}

export function NotificationSettings({ settings, onSettingChange, disabled = false }: NotificationSettingsProps) {
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
              <Label htmlFor="email-transactions" className={disabled ? "text-muted-foreground" : ""}>
                Transacciones
              </Label>
              <p className="text-sm text-muted-foreground">Recibir notificaciones de transacciones realizadas</p>
            </div>
            <Switch
              id="email-transactions"
              checked={settings.email.transactions}
              onCheckedChange={(checked) => onSettingChange("email", "transactions", checked)}
              disabled={disabled}
              className="switch-root"
            />
             
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-security" className={disabled ? "text-muted-foreground" : ""}>
                Seguridad
              </Label>
              <p className="text-sm text-muted-foreground">Alertas de acceso a tu cuenta y cambios de seguridad</p>
            </div>
            <Switch
              id="email-security"
              checked={settings.email.security}
              onCheckedChange={(checked) => onSettingChange("email", "security", checked)}
              disabled={disabled}
              className="switch-root"
            />
           
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-promotions" className={disabled ? "text-muted-foreground" : ""}>
                Promociones
              </Label>
              <p className="text-sm text-muted-foreground">Información sobre ofertas y promociones disponibles</p>
            </div>
            <Switch
              id="email-promotions"
              checked={settings.email.promotions}
              onCheckedChange={(checked) => onSettingChange("email", "promotions", checked)}
              disabled={disabled}
              className="switch-root"
            />
             
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
              <Label htmlFor="sms-transactions" className={disabled ? "text-muted-foreground" : ""}>
                Transacciones importantes
              </Label>
              <p className="text-sm text-muted-foreground">Notificaciones de transacciones de alto valor</p>
            </div>
            <Switch
              id="sms-transactions"
              checked={settings.sms.transactions}
              onCheckedChange={(checked) => onSettingChange("sms", "transactions", checked)}
              disabled={disabled}
              className="switch-root"
            />
              
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="sms-security" className={disabled ? "text-muted-foreground" : ""}>
                Alertas de seguridad
              </Label>
              <p className="text-sm text-muted-foreground">Códigos de verificación y alertas de seguridad críticas</p>
            </div>
            <Switch
              id="sms-security"
              checked={settings.sms.security}
              onCheckedChange={(checked) => onSettingChange("sms", "security", checked)}
              disabled={disabled}
              className="switch-root"
            />
             
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium">Notificaciones push</h3>
        <p className="text-sm text-muted-foreground mb-4">Configura las notificaciones para la aplicación móvil</p>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="push-all" className={disabled ? "text-muted-foreground" : ""}>
                Todas las transacciones
              </Label>
              <p className="text-sm text-muted-foreground">Recibir notificaciones de todas las transacciones</p>
            </div>
            <Switch
              id="push-all"
              checked={settings.push.allTransactions}
              onCheckedChange={(checked) => onSettingChange("push", "allTransactions", checked)}
              disabled={disabled}
              className="switch-root"
            />
             
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="push-news" className={disabled ? "text-muted-foreground" : ""}>
                Noticias y actualizaciones
              </Label>
              <p className="text-sm text-muted-foreground">Información sobre nuevas características y servicios</p>
            </div>
            <Switch
              id="push-news"
              checked={settings.push.news}
              onCheckedChange={(checked) => onSettingChange("push", "news", checked)}
              disabled={disabled}
              className="switch-root"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
