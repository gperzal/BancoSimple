"use client"

import type React from "react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle, Lock, ShieldCheck, ShieldAlert } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { useSecurity } from "../hooks/useSecurity"

export function SecurityForm() {
  const {
    securitySettings,
    securityEvents,
    isLoading,
    isChangingPassword,
    passwordStrength,
    passwords,
    setIsChangingPassword,
    handlePasswordChange,
    updatePassword,
    updateSecuritySetting,
  } = useSecurity()

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updatePassword()
  }

  const toggleTwoFactor = () => {
    updateSecuritySetting("twoFactorAuth", !securitySettings.twoFactorAuth)
  }

  const toggleSessionNotifications = () => {
    updateSecuritySetting("sessionNotifications", !securitySettings.sessionNotifications)
  }

  const toggleBiometricLogin = () => {
    updateSecuritySetting("biometricLogin", !securitySettings.biometricLogin)
  }

  return (
    <div className="space-y-6">
      {/* Cambio de contraseña */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lock className="h-5 w-5 mr-2 text-primary" />
            Contraseña
          </CardTitle>
        </CardHeader>

        {isChangingPassword ? (
          <form onSubmit={handlePasswordSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current_password">Contraseña actual</Label>
                <Input
                  id="current_password"
                  type="password"
                  value={passwords.current}
                  onChange={handlePasswordChange("current")}
                  className="input-primary"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new_password">Nueva contraseña</Label>
                <Input
                  id="new_password"
                  type="password"
                  value={passwords.new}
                  onChange={handlePasswordChange("new")}
                  className="input-primary"
                  required
                  disabled={isLoading}
                />

                {passwords.new && (
                  <div className="mt-2">
                    <div className="text-sm flex justify-between mb-1">
                      <span>Fortaleza:</span>
                      <span
                        className={cn(
                          "font-medium",
                          passwordStrength < 2 && "text-destructive",
                          passwordStrength === 2 && "text-amber-500",
                          passwordStrength >= 3 && "text-emerald-500",
                        )}
                      >
                        {["Muy débil", "Débil", "Moderada", "Fuerte", "Muy fuerte"][passwordStrength]}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full transition-all",
                          passwordStrength < 2 && "bg-destructive",
                          passwordStrength === 2 && "bg-amber-500",
                          passwordStrength >= 3 && "bg-emerald-500",
                        )}
                        style={{ width: `${(passwordStrength / 4) * 100}%` }}
                      />
                    </div>

                    <ul className="text-sm mt-3 space-y-1 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        {passwords.new.length >= 8 ? (
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-destructive" />
                        )}
                        <span>Mínimo 8 caracteres</span>
                      </li>
                      <li className="flex items-center gap-2">
                        {/[A-Z]/.test(passwords.new) ? (
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-destructive" />
                        )}
                        <span>Al menos una letra mayúscula</span>
                      </li>
                      <li className="flex items-center gap-2">
                        {/[0-9]/.test(passwords.new) ? (
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-destructive" />
                        )}
                        <span>Al menos un número</span>
                      </li>
                      <li className="flex items-center gap-2">
                        {/[^A-Za-z0-9]/.test(passwords.new) ? (
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-destructive" />
                        )}
                        <span>Al menos un carácter especial</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm_password">Confirmar contraseña</Label>
                <Input
                  id="confirm_password"
                  type="password"
                  value={passwords.confirm}
                  onChange={handlePasswordChange("confirm")}
                  className="input-primary"
                  required
                  disabled={isLoading}
                />
              </div>
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                type="button"
                onClick={() => setIsChangingPassword(false)}
                className="button-outline-auto"
                disabled={isLoading}
              >
                Cancelar
              </Button>
              <Button type="submit" className="button-primary-auto" disabled={isLoading}>
                {isLoading ? "Actualizando..." : "Actualizar contraseña"}
              </Button>
            </CardFooter>
          </form>
        ) : (
          <>
            <CardContent>
              <p className="text-muted-foreground">
                Tu contraseña fue actualizada por última vez el {securitySettings.lastPasswordChange}
              </p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setIsChangingPassword(true)} className="button-primary-auto" disabled={isLoading}>
                Cambiar contraseña
              </Button>
            </CardFooter>
          </>
        )}
      </Card>

      {/* Configuración de seguridad */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <ShieldCheck className="h-5 w-5 mr-2 text-primary" />
            Configuración de seguridad
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Autenticación de dos factores</Label>
              <p className="text-sm text-muted-foreground">Añade una capa extra de seguridad a tu cuenta.</p>
            </div>
            <Switch checked={securitySettings.twoFactorAuth} onCheckedChange={toggleTwoFactor} disabled={isLoading} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Notificaciones de sesión</Label>
              <p className="text-sm text-muted-foreground">Recibe notificaciones cuando se detecte una sesión nueva.</p>
            </div>
            <Switch
              checked={securitySettings.sessionNotifications}
              onCheckedChange={toggleSessionNotifications}
              disabled={isLoading}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Inicio de sesión biométrico</Label>
              <p className="text-sm text-muted-foreground">Usa tu huella digital o Face ID para iniciar sesión.</p>
            </div>
            <Switch
              checked={securitySettings.biometricLogin}
              onCheckedChange={toggleBiometricLogin}
              disabled={isLoading}
            />
          </div>
        </CardContent>
      </Card>

      {/* Actividad reciente */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <ShieldAlert className="h-5 w-5 mr-2 text-primary" />
            Actividad de seguridad reciente
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {securityEvents.length > 0 && (
            <Alert variant="default" className="bg-primary/5 border-primary/20">
              <AlertTitle className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                Último acceso exitoso
              </AlertTitle>
              <AlertDescription>
                {securityEvents[0].date} • {securityEvents[0].location} • {securityEvents[0].device}
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-4">
            <div className="text-sm font-medium">Historial de eventos de seguridad</div>
            <div className="space-y-2">
              {securityEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-border pb-2 last:border-0"
                >
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 badge-outline-primary">
                      {event.type === "login"
                        ? "Inicio de sesión"
                        : event.type === "password_change"
                          ? "Cambio de contraseña"
                          : event.type === "profile_update"
                            ? "Actualización de perfil"
                            : "Cambio de configuración"}
                    </Badge>
                    <div>
                      <p className="text-sm">{event.device}</p>
                      <p className="text-xs text-muted-foreground">{event.location}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{event.date}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button variant="outline" className="w-full button-outline-auto">
            Ver todo el historial de actividad
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
