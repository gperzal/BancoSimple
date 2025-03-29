"use client";

import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { CreditCard, Gift, PlusCircle } from "lucide-react";
import AccountBalance from "../../cards/components/AccountBalance";
import TransactionsTable from "../../transactions/components/TransactionsTable";

export default function DashboardPage() {
  const userName = "Juan";

  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 space-y-10">
        {/* Bienvenida */}
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-1">
            Bienvenido, {userName}
          </h1>
          <p className="text-muted-foreground">
            Este es un resumen de tus cuentas, tarjetas y movimientos recientes.
          </p>
        </div>

        {/* Vista de saldos por cuenta */}
        <AccountBalance />

        {/* Últimas transacciones */}
        <div>
          <h2 className="text-xl font-semibold text-foreground tracking-wide uppercase border-b pb-2 border-border/50">
            Últimas transferencias
          </h2>
          <TransactionsTable limit={5} />
        </div>

        {/* Acciones rápidas / promociones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <PlusCircle className="w-4 h-4" /> Solicitar nuevo producto
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" /> Ver mis tarjetas
          </Button>
          <Button variant="default" className="flex items-center gap-2">
            <Gift className="w-4 h-4" /> Promociones activas
          </Button>
        </div>
      </section>
    </Layout>
  );
}
