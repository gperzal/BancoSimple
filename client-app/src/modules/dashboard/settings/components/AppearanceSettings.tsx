
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";

export function AppearanceSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Tema</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Personaliza el aspecto visual de tu panel de Banco Simple
        </p>
        
        <RadioGroup defaultValue="system">
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="light" id="light" />
            <Label htmlFor="light">Claro</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="dark" id="dark" />
            <Label htmlFor="dark">Oscuro</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="system" id="system" />
            <Label htmlFor="system">Usar configuración del sistema</Label>
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
              <Label htmlFor="animations">Animaciones</Label>
              <p className="text-sm text-muted-foreground">
                Mostrar animaciones en la interfaz
              </p>
            </div>
            <Switch id="animations" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="compact">Modo compacto</Label>
              <p className="text-sm text-muted-foreground">
                Reducir el espaciado entre elementos
              </p>
            </div>
            <Switch id="compact" />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="icons">Mostrar iconos en menú</Label>
              <p className="text-sm text-muted-foreground">
                Mostrar iconos junto al texto en el menú lateral
              </p>
            </div>
            <Switch id="icons" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );
}
