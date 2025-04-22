"use client"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, AlertCircle } from "lucide-react"
import type { SecuritySettings as SecuritySettingsType } from "../types/SettingsTypes"

interface SecuritySettingsProps {
  settings: SecuritySettingsType
  onSettingChange: (key: keyof SecuritySettingsType, value: any) => void
  disabled?: boolean
}

export function SecuritySettings({ settings, onSettingChange, disabled = false }: SecuritySettingsProps) {
  const daysSinceLastPasswordUpdate = Math.floor(
    (new Date().getTime() - new Date(settings.lastPasswordUpdate).getTime()) / (1000 * 60 * 60 * 24),
  )

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Autenticación de dos factores</h3>
        <p className="text-sm text-muted-foreground mb-4">Añade una capa adicional de seguridad a tu cuenta</p>

        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="2fa" className={disabled ? "text-muted-foreground" : ""}>
              Activar autenticación de dos factores
            </Label>
            <p className="text-sm text-muted-foreground">
              Aumenta la seguridad de tu cuenta requiriendo un código adicional al iniciar sesión
            </p>
          </div>
          <Switch
            id="2fa"
            checked={settings.twoFactorAuth}
            onCheckedChange={(checked) => onSettingChange("twoFactorAuth", checked)}
            disabled={disabled}
            className="switch-root"
          />
           
        </div>

        <div className="mt-4">
          <Button variant="outline" className="button-outline-auto" disabled={disabled || !settings.twoFactorAuth}>
            Configurar autenticación de dos factores
          </Button>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium">Sesiones activas</h3>
        <p className="text-sm text-muted-foreground mb-4">Gestiona tus sesiones activas en otros dispositivos</p>

        <Alert variant="default" className="mb-4 bg-primary/5 border-primary/20">
          <Shield className="h-4 w-4 text-primary" />
          <AlertDescription>Tienes {settings.activeSessions} sesiones activas en otros dispositivos</AlertDescription>
        </Alert>

        <Button
          variant="secondary"
          className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
          disabled={disabled}
        >
          Ver y gestionar sesiones
        </Button>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium">Contraseña</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Actualiza tu contraseña periódicamente para mayor seguridad
        </p>

        <Alert variant="default" className="mb-4 bg-primary/5 border-primary/20">
          <AlertCircle className="h-4 w-4 text-primary" />
          <AlertDescription>
            Tu contraseña no se ha actualizado en los últimos {daysSinceLastPasswordUpdate} días
          </AlertDescription>
        </Alert>

        <Button className="button-primary-auto" disabled={disabled}>
          Cambiar contraseña
        </Button>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium">Opciones de seguridad adicionales</h3>
        <p className="text-sm text-muted-foreground mb-4">Configura opciones adicionales de seguridad</p>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="login-notifications" className={disabled ? "text-muted-foreground" : ""}>
                Notificaciones de inicio de sesión
              </Label>
              <p className="text-sm text-muted-foreground">
                Recibe notificaciones cuando tu cuenta sea accedida desde un nuevo dispositivo
              </p>
            </div>
            <Switch
              id="login-notifications"
              checked={settings.loginNotifications}
              onCheckedChange={(checked) => onSettingChange("loginNotifications", checked)}
              disabled={disabled}
              className="switch-root"
            />
             
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="suspicious-activity" className={disabled ? "text-muted-foreground" : ""}>
                Alertas de actividad sospechosa
              </Label>
              <p className="text-sm text-muted-foreground">
                Recibe alertas cuando se detecte actividad inusual en tu cuenta
              </p>
            </div>
            <Switch
              id="suspicious-activity"
              checked={settings.suspiciousActivityAlerts}
              onCheckedChange={(checked) => onSettingChange("suspiciousActivityAlerts", checked)}
              disabled={disabled}
              className="switch-root"
            />
              
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="require-password" className={disabled ? "text-muted-foreground" : ""}>
                Requerir contraseña para transacciones
              </Label>
              <p className="text-sm text-muted-foreground">
                Solicitar contraseña para confirmar transacciones importantes
              </p>
            </div>
            <Switch
              id="require-password"
              checked={settings.requirePasswordForTransactions}
              onCheckedChange={(checked) => onSettingChange("requirePasswordForTransactions", checked)}
              disabled={disabled}
              className="switch-root"
            />
             
          </div>
        </div>
      </div>
    </div>
  )
}
