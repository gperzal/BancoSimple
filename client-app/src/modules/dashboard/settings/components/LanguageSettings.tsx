
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function LanguageSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Idioma de la aplicación</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Selecciona el idioma en el que deseas ver la interfaz
        </p>
        
        <RadioGroup defaultValue="spanish">
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="spanish" id="spanish" />
            <Label htmlFor="spanish">Español</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="english" id="english" />
            <Label htmlFor="english">English</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="portuguese" id="portuguese" />
            <Label htmlFor="portuguese">Português</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h3 className="text-lg font-medium">Formato regional</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Configura cómo se muestran las fechas, números y moneda
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <Label htmlFor="date-format">Formato de fecha</Label>
            <Select defaultValue="dd-mm-yyyy">
              <SelectTrigger id="date-format">
                <SelectValue placeholder="Selecciona un formato" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dd-mm-yyyy">DD-MM-YYYY (31-12-2023)</SelectItem>
                <SelectItem value="mm-dd-yyyy">MM-DD-YYYY (12-31-2023)</SelectItem>
                <SelectItem value="yyyy-mm-dd">YYYY-MM-DD (2023-12-31)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="currency">Moneda principal</Label>
            <Select defaultValue="clp">
              <SelectTrigger id="currency">
                <SelectValue placeholder="Selecciona una moneda" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clp">Peso Chileno (CLP)</SelectItem>
                <SelectItem value="usd">Dólar Estadounidense (USD)</SelectItem>
                <SelectItem value="eur">Euro (EUR)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="timezone">Zona horaria</Label>
          <Select defaultValue="santiago">
            <SelectTrigger id="timezone">
              <SelectValue placeholder="Selecciona una zona horaria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="santiago">América/Santiago (GMT-4)</SelectItem>
              <SelectItem value="buenos_aires">América/Buenos_Aires (GMT-3)</SelectItem>
              <SelectItem value="sao_paulo">América/Sao_Paulo (GMT-3)</SelectItem>
              <SelectItem value="mexico_city">América/Mexico_City (GMT-6)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
