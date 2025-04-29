"use client";

import { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import InternalContactForm from "./InternalContactForm";
import ExternalContactForm from "./ExternalContactForm";
import type { ContactFormData } from "../types/ContactTypes";
import { User, Building } from "lucide-react";
import { useContacts } from "../hooks/useContacts";

interface AddContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultData?: ContactFormData;
  onSave: (data: ContactFormData) => void;
}

export default function AddContactDialog({
  open,
  onOpenChange,
  defaultData,
  onSave,
}: AddContactDialogProps) {
  const [tab, setTab] = useState<"internal" | "external">(
    defaultData?.type === "EXTERNAL" ? "external" : "internal"
  );

  const { banks, categories, loading } = useContacts();

  const handleSave = (data: ContactFormData) => {
    onSave(data);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-3xl popover">
        <DialogHeader>
          <DialogTitle>Agregar o editar contacto</DialogTitle>
          <DialogDescription>
            Completa los datos para agregar o editar un contacto frecuente
            externo o interno.
          </DialogDescription>
        </DialogHeader>

        <Tabs
          value={tab}
          onValueChange={(v) => setTab(v as "internal" | "external")}
        >
          <TabsList className="bg-transparent border border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] p-1 rounded-xl mb-4">
            <TabsTrigger
              value="internal"
              className="flex items-center gap-2 tabs-trigger-primary"
            >
              <Building className="h-4 w-4" />
              Cliente BancoSimple
            </TabsTrigger>
            <TabsTrigger value="external" className="tabs-trigger-primary">
              <User className="h-4 w-4" />
              Banco Externo
            </TabsTrigger>
          </TabsList>

          <TabsContent value="internal">
            <InternalContactForm
              defaultData={defaultData}
              onSave={handleSave}
              onCancel={() => onOpenChange(false)}
            />
          </TabsContent>
          <TabsContent value="external">
            <ExternalContactForm
              defaultData={defaultData}
              onSave={handleSave}
              onCancel={() => onOpenChange(false)}
              banks={banks}
              categories={categories}
              loading={loading}
            />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
