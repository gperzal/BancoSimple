"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  CheckCircle,
  Lock,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const UserSecurityForm: React.FC = () => {
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const [passwordStrength, setPasswordStrength] = useState(0);

  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [sessionNotifications, setSessionNotifications] = useState(true);
  const [biometricLogin, setBiometricLogin] = useState(false);

  const handlePasswordChange =
    (field: keyof typeof passwords) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setPasswords((prev) => ({ ...prev, [field]: value }));

      if (field === "new") {
        let strength = 0;
        if (value.length >= 8) strength += 1;
        if (/[A-Z]/.test(value)) strength += 1;
        if (/[0-9]/.test(value)) strength += 1;
        if (/[^A-Za-z0-9]/.test(value)) strength += 1;
        setPasswordStrength(strength);
      }
    };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (passwords.new !== passwords.confirm) {
      toast.error("Las contraseñas nuevas no coinciden.");
      return;
    }

    if (passwordStrength < 3) {
      toast.error("Por favor, crea una contraseña más segura.");
      return;
    }

    console.log("Password change submitted:", passwords);

    toast.success("Tu contraseña ha sido actualizada correctamente.");
    setIsChangingPassword(false);
    setPasswords({ current: "", new: "", confirm: "" });
  };

  const toggleTwoFactor = () => {
    const newValue = !twoFactorAuth;
    setTwoFactorAuth(newValue);

    toast.success(
      newValue
        ? "Se ha activado la autenticación de dos factores."
        : "Se ha desactivado la autenticación de dos factores."
    );
  };

  const lastLogin = "2025-04-07 14:30";
  const securityEvents = [
    {
      type: "login",
      device: "iPhone 15 Pro",
      location: "Santiago, Chile",
      date: "2025-04-07 14:30",
    },
    {
      type: "password_change",
      device: "MacBook Pro",
      location: "Santiago, Chile",
      date: "2025-03-25 10:15",
    },
    {
      type: "login",
      device: "Samsung Galaxy S23",
      location: "Viña del Mar, Chile",
      date: "2025-03-20 17:45",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Cambio de contraseña */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lock className="h-5 w-5 mr-2" />
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
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new_password">Nueva contraseña</Label>
                <Input
                  id="new_password"
                  type="password"
                  value={passwords.new}
                  onChange={handlePasswordChange("new")}
                  required
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
                          passwordStrength >= 3 && "text-emerald-500"
                        )}
                      >
                        {
                          [
                            "Muy débil",
                            "Débil",
                            "Moderada",
                            "Fuerte",
                            "Muy fuerte",
                          ][passwordStrength]
                        }
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full transition-all",
                          passwordStrength < 2 && "bg-destructive",
                          passwordStrength === 2 && "bg-amber-500",
                          passwordStrength >= 3 && "bg-emerald-500"
                        )}
                        style={{ width: `${(passwordStrength / 4) * 100}%` }}
                      />
                    </div>

                    <ul className="text-sm mt-3 space-y-1 text-muted-foreground">
                      <li className="flex items-center">
                        {passwords.new.length >= 8 ? (
                          <CheckCircle />
                        ) : (
                          <AlertCircle />
                        )}
                        Mínimo 8 caracteres
                      </li>
                      <li className="flex items-center">
                        (/[A-Z]/.test(passwords.new) ? <CheckCircle /> :{" "}
                        <AlertCircle />) Al menos una letra mayúscula
                      </li>
                      <li className="flex items-center">
                        (/[0-9]/.test(passwords.new) ? <CheckCircle /> :{" "}
                        <AlertCircle />) Al menos un número
                      </li>
                      <li className="flex items-center">
                        (/[^A-Za-z0-9]/.test(passwords.new) ? <CheckCircle /> :{" "}
                        <AlertCircle />) Al menos un carácter especial
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
                  required
                />
              </div>
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                type="button"
                onClick={() => setIsChangingPassword(false)}
              >
                Cancelar
              </Button>
              <Button type="submit">Actualizar contraseña</Button>
            </CardFooter>
          </form>
        ) : (
          <>
            <CardContent>
              <p className="text-muted-foreground">
                Tu contraseña fue actualizada por última vez el 25 de marzo,
                2025
              </p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setIsChangingPassword(true)}>
                Cambiar contraseña
              </Button>
            </CardFooter>
          </>
        )}
      </Card>

      {/* Configuración de seguridad */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <ShieldCheck className="h-5 w-5 mr-2" />
            Configuración de seguridad
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Autenticación de dos factores</Label>
              <p className="text-sm text-muted-foreground">
                Añade una capa extra de seguridad a tu cuenta.
              </p>
            </div>
            <Switch checked={twoFactorAuth} onCheckedChange={toggleTwoFactor} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Notificaciones de sesión</Label>
              <p className="text-sm text-muted-foreground">
                Recibe notificaciones cuando se detecte una sesión nueva.
              </p>
            </div>
            <Switch
              checked={sessionNotifications}
              onCheckedChange={setSessionNotifications}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Inicio de sesión biométrico</Label>
              <p className="text-sm text-muted-foreground">
                Usa tu huella digital o Face ID para iniciar sesión.
              </p>
            </div>
            <Switch
              checked={biometricLogin}
              onCheckedChange={setBiometricLogin}
            />
          </div>
        </CardContent>
      </Card>

      {/* Actividad reciente */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <ShieldAlert className="h-5 w-5 mr-2" />
            Actividad de seguridad reciente
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Alert variant="default" className="bg-primary/5 border-primary/20">
            <AlertTitle className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Último acceso exitoso
            </AlertTitle>
            <AlertDescription>
              {lastLogin} • Santiago, Chile • iPhone 15 Pro
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="text-sm font-medium">
              Historial de eventos de seguridad
            </div>
            <div className="space-y-2">
              {securityEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-border pb-2 last:border-0"
                >
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">
                      {event.type === "login"
                        ? "Inicio de sesión"
                        : "Cambio de contraseña"}
                    </Badge>
                    <div>
                      <p className="text-sm">{event.device}</p>
                      <p className="text-xs text-muted-foreground">
                        {event.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {event.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button variant="outline" className="w-full">
            Ver todo el historial de actividad
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserSecurityForm;
