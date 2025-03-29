import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { toast } from "sonner";

// Validación del formulario usando Zod
const schema = z.object({
  fromAccount: z.string().nonempty("Selecciona una cuenta de origen"),
  toAccount: z.string().nonempty("Ingresa la cuenta destino o RUT"),
  amount: z.string().refine((val) => parseFloat(val.replace(",", ".")) > 0, {
    message: "El monto debe ser mayor a 0",
  }),
  currency: z.string(),
  description: z.string().optional(),
  category: z.string().default("transferencia"),
  reference: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function TransactionsForm() {
  const [loading, setLoading] = useState(false);

  // Setup del hook react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      currency: "CLP",
      category: "transferencia",
    },
  });

  // Simulación de envío del formulario
  const onSubmit = (values: FormValues) => {
    setLoading(true);
    setTimeout(() => {
      toast.success(`Has transferido ${values.amount} ${values.currency}`);
      setLoading(false);
    }, 1000);
  };
  const inputClass =
    "border border-gray-300 rounded-md text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-colors";

  const selectClass =
    "border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-colors";

  return (
    <div className="card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">
          Realizar nueva transferencia
        </CardTitle>
        <CardDescription>
          Envía dinero a otras cuentas bancarias de manera segura
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Cuenta de origen */}
          <div className="space-y-1">
            <label
              htmlFor="fromAccount"
              className="text-sm font-medium text-foreground"
            >
              Cuenta de Origen
            </label>
            <Input
              id="fromAccount"
              placeholder="Ej: Cuenta Corriente CLP"
              {...form.register("fromAccount")}
              className={inputClass}
            />
          </div>

          {/* Cuenta destino o RUT */}
          <div className="space-y-1">
            <label
              htmlFor="toAccount"
              className="text-sm font-medium text-foreground"
            >
              Cuenta Destino o RUT
            </label>
            <Input
              id="toAccount"
              placeholder="Ej: 12.345.678-9 o 123456789012"
              {...form.register("toAccount")}
              className={inputClass}
            />
          </div>

          {/* Monto a transferir */}
          <div className="space-y-1">
            <label
              htmlFor="amount"
              className="text-sm font-medium text-foreground"
            >
              Monto a transferir
            </label>
            <Input
              id="amount"
              placeholder="Ej: 10000"
              {...form.register("amount")}
              className={inputClass}
            />
          </div>

          {/* Selector de moneda */}
          <div className="space-y-1">
            <label
              htmlFor="currency"
              className="text-sm font-medium text-foreground"
            >
              Moneda
            </label>
            <Select
              defaultValue="CLP"
              onValueChange={(val) => form.setValue("currency", val)}
            >
              <SelectTrigger
                id="currency"
                className={`w-full border rounded-md px-3 py-2 ${selectClass}`}
              >
                <SelectValue placeholder="Selecciona moneda" />
              </SelectTrigger>
              <SelectContent className="z-50">
                <SelectItem value="CLP">Peso Chileno (CLP)</SelectItem>
                <SelectItem value="GBP">Libra Esterlina (GBP)</SelectItem>
                <SelectItem value="ARS">Peso Argentino (ARS)</SelectItem>
                <SelectItem value="BRL">Real Brasileño (BRL)</SelectItem>
                <SelectItem value="USD">Dólar Estadounidense (USD)</SelectItem>
                <SelectItem value="EUR">Euro (EUR)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Selector de categoría */}
          <div className="space-y-1">
            <label
              htmlFor="category"
              className="text-sm font-medium text-foreground"
            >
              Categoría
            </label>
            <Select
              defaultValue="transferencia"
              onValueChange={(val) => form.setValue("category", val)}
            >
              <SelectTrigger
                id="category"
                className={`w-full border rounded-md px-3 py-2 ${selectClass}`}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className={"z-50 "}>
                <SelectItem value="transferencia" defaultChecked>
                  Transferencia
                </SelectItem>
                <SelectItem value="recarga">Recarga</SelectItem>
                <SelectItem value="compra">Compra</SelectItem>
                <SelectItem value="pago_servicios">Pago Servicios</SelectItem>
                <SelectItem value="arriendo">Arriendo</SelectItem>
                <SelectItem value="salud">Salud</SelectItem>
                <SelectItem value="gasto_familiar">Gasto Familiar</SelectItem>
                <SelectItem value="otros">Otros</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Referencia externa opcional */}
          <div className="space-y-1">
            <label
              htmlFor="reference"
              className="text-sm font-medium text-foreground"
            >
              Referencia externa (solo si aplica)
            </label>
            <Input
              id="reference"
              {...form.register("reference")}
              className={inputClass}
            />
          </div>

          {/* Descripción opcional */}
          <div className="space-y-1">
            <label
              htmlFor="description"
              className="text-sm font-medium text-foreground"
            >
              Descripción (opcional)
            </label>
            <Textarea
              id="description"
              placeholder="Ej: Pago por almuerzo, transferencia mensual, etc."
              {...form.register("description")}
              className={inputClass}
            />
          </div>

          {/* Botón de envío */}
          <div className="flex justify-end">
            <button type="submit" className="button" disabled={loading}>
              {loading ? "Enviando..." : "Enviar transferencia"}
            </button>
          </div>
        </form>
      </CardContent>
    </div>
  );
}
