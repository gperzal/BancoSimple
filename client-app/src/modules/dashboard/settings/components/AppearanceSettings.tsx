"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";

import type { AppearanceSettings as AppearanceSettingsType } from "../types/SettingsTypes";

interface AppearanceSettingsProps {
  settings: AppearanceSettingsType;
  onSettingChange: <K extends keyof AppearanceSettingsType>(
    key: K,
    value: AppearanceSettingsType[K]
  ) => void;
  disabled?: boolean;
}

export function AppearanceSettings({

  settings,
  onSettingChange,
  disabled = false,
}: AppearanceSettingsProps) {
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Tema</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Personaliza el aspecto visual de tu panel de Banco Simple
        </p>

        <RadioGroup
          value={settings.theme}
          onValueChange={(value) => {
            if (value === "light" || value === "dark" || value === "system") {
              onSettingChange("theme", value);
            }
          }}
          disabled={disabled}
        >
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="light" id="light" disabled={disabled} />
            <Label
              htmlFor="light"
              className={disabled ? "text-muted-foreground" : ""}
            >
              Claro
            </Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="dark" id="dark" disabled={disabled} />
            <Label
              htmlFor="dark"
              className={disabled ? "text-muted-foreground" : ""}
            >
              Oscuro
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="system" id="system" disabled={disabled} />
            <Label
              htmlFor="system"
              className={disabled ? "text-muted-foreground" : ""}
            >
              Usar configuración del sistema
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h3 className="text-lg font-medium">Opciones de visualización</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Configura cómo se muestran los elementos en tu panel
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label
                htmlFor="animations"
                className={disabled ? "text-muted-foreground" : ""}
              >
                Animaciones
              </Label>
              <p className="text-sm text-muted-foreground">
                Mostrar animaciones en la interfaz
              </p>
            </div>
            <Switch
              id="animations"
              checked={settings.animations}
              onCheckedChange={(checked) =>
                onSettingChange("animations", checked)
              }
              disabled={disabled}
              className="switch-root"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label
                htmlFor="compact"
                className={disabled ? "text-muted-foreground" : ""}
              >
                Modo compacto
              </Label>
              <p className="text-sm text-muted-foreground">
                Reducir el espaciado entre elementos
              </p>
            </div>
            <Switch
              id="compact"
              checked={settings.compactMode}
              onCheckedChange={(checked) =>
                onSettingChange("compactMode", checked)
              }
              disabled={disabled}
              className="switch-root"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label
                htmlFor="icons"
                className={disabled ? "text-muted-foreground" : ""}
              >
                Mostrar iconos en menú
              </Label>
              <p className="text-sm text-muted-foreground">
                Mostrar iconos junto al texto en el menú lateral
              </p>
            </div>
            <Switch
              id="icons"
              checked={settings.showIcons}
              onCheckedChange={(checked) =>
                onSettingChange("showIcons", checked)
              }
              disabled={disabled}
              className="switch-root"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
