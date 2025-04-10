import { useState, useEffect } from "react";
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
import { notifySuccess } from "@/utils/notifications";
import { FaPaperPlane } from "react-icons/fa";
import { FormGroup } from "@/components/ui/form-group";

export interface Contact {
  id: number;
  name: string;
  email: string;
  accountNumber: string;
  favorite: boolean;
  image: string;
}

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

interface TransactionsFormProps {
  selectedContact?: Contact | null;
}

export default function TransactionsForm({
  selectedContact,
}: TransactionsFormProps) {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      currency: "CLP",
      category: "transferencia",
    },
  });

  useEffect(() => {
    if (selectedContact) {
      form.setValue("toAccount", selectedContact.accountNumber);
      form.setValue("description", `Transferencia a ${selectedContact.name}`);
    }
  }, [selectedContact, form]);

  const onSubmit = (values: FormValues) => {
    setLoading(true);
    setTimeout(() => {
      notifySuccess(
        "Transferencia exitosa",
        `Has transferido ${values.amount} ${values.currency}`
      );
      setLoading(false);
    }, 1000);
  };

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
          <FormGroup label="Cuenta de Origen" htmlFor="fromAccount">
            <Input
              id="fromAccount"
              placeholder="Ej: Cuenta Corriente CLP"
              {...form.register("fromAccount")}
              className="input-primary"
            />
          </FormGroup>

          <FormGroup label="Cuenta Destino o RUT" htmlFor="toAccount">
            <Input
              id="toAccount"
              placeholder="Ej: 12.345.678-9 o 123456789012"
              {...form.register("toAccount")}
              className="input-primary"
            />
          </FormGroup>

          <FormGroup label="Monto a transferir" htmlFor="amount">
            <Input
              id="amount"
              placeholder="Ej: 10000"
              {...form.register("amount")}
              className="input-primary"
            />
          </FormGroup>

          <FormGroup label="Moneda" htmlFor="currency">
            <Select
              onValueChange={(val) => form.setValue("currency", val)}
              defaultValue="CLP"
            >
              <SelectTrigger id="currency" className="select-primary popover">
                <SelectValue placeholder="Selecciona moneda" />
              </SelectTrigger>
              <SelectContent className="popover z-50">
                <SelectItem value="CLP" className="popover-option">
                  Peso Chileno (CLP)
                </SelectItem>
                <SelectItem value="GBP" className="popover-option">
                  Libra Esterlina (GBP)
                </SelectItem>
                <SelectItem value="ARS" className="popover-option">
                  Peso Argentino (ARS)
                </SelectItem>
                <SelectItem value="BRL" className="popover-option">
                  Real Brasileño (BRL)
                </SelectItem>
                <SelectItem value="USD" className="popover-option">
                  Dólar Estadounidense (USD)
                </SelectItem>
                <SelectItem value="EUR" className="popover-option">
                  Euro (EUR)
                </SelectItem>
              </SelectContent>
            </Select>
          </FormGroup>

          <FormGroup label="Categoría" htmlFor="category">
            <Select
              onValueChange={(val) => form.setValue("category", val)}
              defaultValue="transferencia"
            >
              <SelectTrigger id="category" className="select-primary popover">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="popover z-50">
                <SelectItem value="transferencia" className="popover-option">
                  Transferencia
                </SelectItem>
                <SelectItem value="recarga" className="popover-option">
                  Recarga
                </SelectItem>
                <SelectItem value="compra" className="popover-option">
                  Compra
                </SelectItem>
                <SelectItem value="pago_servicios" className="popover-option">
                  Pago Servicios
                </SelectItem>
                <SelectItem value="arriendo" className="popover-option">
                  Arriendo
                </SelectItem>
                <SelectItem value="salud" className="popover-option">
                  Salud
                </SelectItem>
                <SelectItem value="gasto_familiar" className="popover-option">
                  Gasto Familiar
                </SelectItem>
                <SelectItem value="otros" className="popover-option">
                  Otros
                </SelectItem>
              </SelectContent>
            </Select>
          </FormGroup>

          <FormGroup
            label="Referencia externa (solo si aplica)"
            htmlFor="reference"
          >
            <Input
              id="reference"
              {...form.register("reference")}
              className="input-primary"
            />
          </FormGroup>

          <FormGroup label="Descripción (opcional)" htmlFor="description">
            <Textarea
              id="description"
              placeholder="Ej: Pago por almuerzo, transferencia mensual, etc."
              {...form.register("description")}
              className="input-primary"
            />
          </FormGroup>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="button-primary-auto px-6"
            >
              {loading ? "Enviando..." : "Enviar transferencia"}{" "}
              <FaPaperPlane />
            </button>
          </div>
        </form>
      </CardContent>
    </div>
  );
}
