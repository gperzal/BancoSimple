"use client";

import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { notifyError, notifySuccess } from "@/utils/notifications";
import type { ContactFormData, Category } from "../types/ContactTypes";
import { UserRoundPlus, UserRoundPen } from "lucide-react";
import { formatBankName } from "@/modules/dashboard/contacts/utils/formatBankName";

interface Props {
  defaultData?: ContactFormData;
  onSave: (data: ContactFormData) => void;
  onCancel: () => void;
  banks: string[];
  categories: string[];
  loading: boolean;
}

export default function ExternalContactForm({
  defaultData,
  onSave,
  onCancel,
  banks,
  categories,
  loading,
}: Props) {
  const [form, setForm] = useState({
    bankName: defaultData?.bankName || "",
    accountNumber: defaultData?.accountNumber || "",
    holderName: defaultData?.holderName || "",
    category: defaultData?.category || "",
    alias: defaultData?.alias || "",
  });

  useEffect(() => {
    if (!defaultData && !loading) {
      if (banks.length && !form.bankName) {
        setForm((f) => ({ ...f, bankName: banks[0] }));
      }
      if (categories.length && !form.category) {
        setForm((f) => ({ ...f, category: categories[0] }));
      }
    }
  }, [banks, categories, loading, defaultData, form.bankName, form.category]);

  const change = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { bankName, accountNumber, holderName, alias, category } = form;
    if (!(bankName && accountNumber && holderName && alias && category)) {
      notifyError("Error", "Todos los campos son obligatorios");
      return;
    }
    onSave({
      id: defaultData?.id,
      type: "EXTERNAL",
      category: category as Category,
      bankName,
      accountNumber,
      holderName,
      alias,
      rut: defaultData?.rut ?? "",
      favorite: defaultData?.favorite ?? true,
      userId: defaultData?.userId ?? 0,
      addedDate: defaultData?.addedDate ?? new Date().toISOString(),
    });
    notifySuccess(
      defaultData ? "Contacto actualizado" : "Contacto creado",
      defaultData
        ? "Se actualizó la cuenta externa"
        : "Se agregó la cuenta externa"
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="bank" className="mb-2">
            Banco
          </Label>
          <Select
            value={form.bankName}
            onValueChange={(v) => change("bankName", v)}
            disabled={loading || banks.length === 0}
          >
            <SelectTrigger className="select-primary">
              <SelectValue
                placeholder={
                  loading ? "Cargando bancos..." : "Selecciona banco"
                }
              />
            </SelectTrigger>
            <SelectContent className="popover">
              {banks.length === 0 && !loading && (
                <div className="px-4 py-2 text-muted-foreground">
                  No hay bancos disponibles
                </div>
              )}
              {banks.map((b) => (
                <SelectItem key={b} value={b}>
                  {formatBankName(b)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="category" className="mb-2">
            Tipo de cuenta
          </Label>
          <Select
            value={form.category}
            onValueChange={(v) => change("category", v)}
            disabled={loading || categories.length === 0}
          >
            <SelectTrigger className="select-primary">
              <SelectValue
                placeholder={loading ? "Cargando tipos..." : "Selecciona tipo"}
              />
            </SelectTrigger>
            <SelectContent className="popover">
              {categories.length === 0 && !loading && (
                <div className="px-4 py-2 text-muted-foreground">
                  No hay tipos disponibles
                </div>
              )}
              {categories.map((c) => (
                <SelectItem key={c} value={c}>
                  {c.charAt(0).toUpperCase() + c.slice(1).toLowerCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="accountNumber">Número de cuenta</Label>
        <Input
          id="accountNumber"
          className="input-primary"
          value={form.accountNumber}
          onChange={(e) => change("accountNumber", e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="holderName">Titular</Label>
        <Input
          id="holderName"
          className="input-primary"
          value={form.holderName}
          onChange={(e) => change("holderName", e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="alias">Alias</Label>
        <Input
          id="alias"
          className="input-primary"
          value={form.alias}
          onChange={(e) => change("alias", e.target.value)}
          required
        />
      </div>

      <div className="flex justify-end gap-2">
        <Button className="button-outline-auto" onClick={onCancel}>
          Cancelar
        </Button>
        <Button className="button-primary-auto" type="submit">
          {defaultData ? (
            <>
              <UserRoundPen className="h-4 w-4" /> Actualizar
            </>
          ) : (
            <>
              <UserRoundPlus className="h-4 w-4" /> Guardar
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
