import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale"; 
import { useState } from "react";

export default function Filters() {
  const [period, setPeriod] = useState("30days");
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  return (
    <div className="card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {/* Cuenta */}
      <div>
        <label className="text-sm text-muted-foreground">Cuenta</label>
        <Select defaultValue="all">
          <SelectTrigger className="select-primary popover">
            <SelectValue placeholder="Todas las cuentas" />
          </SelectTrigger>
          <SelectContent className="popover z-50">
            <SelectItem value="all" className="popover-option">
              Todas las cuentas
            </SelectItem>
            <SelectItem value="corriente" className="popover-option">
              Cuenta Corriente
            </SelectItem>
            <SelectItem value="ahorro" className="popover-option">
              Cuenta Ahorro
            </SelectItem>
            <SelectItem value="prepago" className="popover-option">
              Tarjeta Prepago
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Periodo */}
      <div>
        <label className="text-sm text-muted-foreground">Periodo</label>
        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="select-primary popover">
            <SelectValue placeholder="Seleccionar periodo" />
          </SelectTrigger>
          <SelectContent className="popover z-50">
            <SelectItem value="30days" className="popover-option">
              Últimos 30 días
            </SelectItem>
            <SelectItem value="90days" className="popover-option">
              Últimos 90 días
            </SelectItem>
            <SelectItem value="thisMonth" className="popover-option">
              Este mes
            </SelectItem>
            <SelectItem value="custom" className="popover-option">
              Personalizado
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Fechas personalizadas */}
      {period === "custom" && (
        <>
          <div>
            <label className="text-sm text-muted-foreground">Desde</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full text-left text-sm button-outline-auto popover"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate
                    ? format(startDate, "PPP", { locale: es })
                    : "Selecciona fecha"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 popover">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  locale={es}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <label className="text-sm text-muted-foreground">Hasta</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full text-left text-sm button-outline-auto popover"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate
                    ? format(endDate, "PPP", { locale: es })
                    : "Selecciona fecha"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 popover">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  locale={es}
                />
              </PopoverContent>
            </Popover>
          </div>
        </>
      )}
    </div>
  );
}
