// src/modules/dashboard/contacts/components/InternalContactForm.tsx
"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { notifyError, notifyInfo, notifySuccess } from "@/utils/notifications";
import type {
  ContactFormData,
  InternalAccount,
  UserSearchResult,
} from "../types/ContactTypes";
import { searchInternalAccountsByRut } from "@/modules/dashboard/contacts/services/contactService";
import { User } from "lucide-react";

interface Props {
  defaultData?: ContactFormData;
  onSave: (d: ContactFormData) => void;
  onCancel: () => void;
}

export default function InternalContactForm({
  defaultData,
  onSave,
  onCancel,
}: Props) {
  const [rut, setRut] = useState("11111111-1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<UserSearchResult | null>(null);
  const [selected, setSelected] = useState<InternalAccount | null>(
    defaultData?.favoriteProductId
      ? {
          id: defaultData.favoriteProductId,
          name: "",
          category: defaultData.category,
          productNumber: "",
        }
      : null
  );
  const [alias, setAlias] = useState(defaultData?.alias ?? "");

  const searchByRut = async (rutVal: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await searchInternalAccountsByRut(rutVal);

      const userSearchResult: UserSearchResult = {
        firstName: response.fullName.split(" ")[0],
        lastName: response.fullName.split(" ").slice(1).join(" "),
        email: response.email,
        rut: response.rut,
        internalAccounts: response.internalAccounts.map(
          (acc: InternalAccount) => ({
            id: acc.id,
            name: acc.name,
            category: acc.category,
            productNumber: acc.productNumber,
          })
        ),
        externalAccounts: [],
      };

      setResult(userSearchResult);
      notifyInfo("Cliente encontrado", "Se encontró el cliente");
    } catch (err) {
      console.error("[searchByRut] Error:", err);
      setError("No se encontró el cliente");
      notifyError("Error", "No se pudo buscar");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (!selected) {
      notifyError("Error", "Selecciona una cuenta interna");
      return;
    }
    if (!alias.trim()) {
      notifyError("Error", "Ingresa un alias");
      return;
    }
    onSave({
      id: defaultData?.id,
      type: "INTERNAL",
      category: selected.category,
      favoriteProductId: selected.id,
      alias,
      active: true,
    });
    notifySuccess("Contacto guardado", "Cuenta interna agregada");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="space-y-4"
    >
      <div className="space-y-2">
        <Label htmlFor="rut">RUT Cliente</Label>
        <div className="flex gap-2">
          <Input
            id="rut"
            placeholder="12345678-9"
            className="input-primary"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            required
          />
          <Button
            type="button"
            className="button-primary-auto"
            onClick={() => rut.trim() && searchByRut(rut)}
            disabled={loading}
          >
            Buscar
          </Button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>

      {loading && <Skeleton className="h-24 w-full" />}

      {result && (
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>
                {result.firstName} {result.lastName}
              </CardTitle>
              <Badge className="bg-green-500  text-white flex items-center gap-1">
                <User className="h-3 w-3" /> Cliente
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <RadioGroup
              value={selected?.id.toString() || ""}
              onValueChange={(v) => {
                const acct = result.internalAccounts.find(
                  (a) => a.id.toString() === v
                )!;
                setSelected(acct);
                setAlias(
                  `${result.firstName} ${result.lastName} - ${acct.name}`
                );
              }}
            >
              {result.internalAccounts.map((a) => (
                <div
                  key={a.id}
                  className="flex items-start gap-2 border border-gray-300 dark:border-gray-700 p-3 rounded-md"
                >
                  <RadioGroupItem
                    value={a.id.toString()}
                    id={`acc-${a.id}`}
                    className="mt-1"
                  />
                  <div>
                    <p className="text-sm font-medium">Tipo Cuenta: {a.name}</p>{" "}
                    {/* <<<<< aquí mostramos el name */}
                    <p className="text-sm text-muted-foreground">
                      N° Cuenta: {a.productNumber}
                    </p>
                  </div>
                </div>
              ))}
            </RadioGroup>

            <div className="space-y-2">
              <Label htmlFor="alias">Alias</Label>
              <Input
                id="alias"
                placeholder="Mi cuenta de ahorro"
                className="input-primary"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
                required
              />
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-end gap-2">
        <Button className="button-outline-auto" onClick={onCancel}>
          Cancelar
        </Button>
        <Button className="button-primary-auto" type="submit">
          Guardar
        </Button>
      </div>
    </form>
  );
}
