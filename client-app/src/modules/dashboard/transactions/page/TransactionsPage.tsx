// src/modules/dashboard/transactions/page/TransactionsPage.tsx
"use client";

import { useState } from "react";
import TransactionsForm, {
  type Contact,
} from "@/modules/dashboard/transactions/components/TransactionsForm";
import { FrequentContactsSection } from "@/modules/dashboard/transactions/components/FrequentContactsSection";
import { TransferTipsFloating } from "@/modules/dashboard/transactions/components/TransferTipsFloating";

export default function TransactionsPage() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  return (
    <>
      <section className="container mx-auto space-y-6 py-4">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-2">
            Transferencias
          </h1>
          <p className="text-muted-foreground text-base">
            Envía dinero y selecciona una cuenta frecuente para agilizar tu
            experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <TransactionsForm selectedContact={selectedContact} />
          <FrequentContactsSection onSelectContact={setSelectedContact} />
        </div>
      </section>

      <TransferTipsFloating />
    </>
  );
}
