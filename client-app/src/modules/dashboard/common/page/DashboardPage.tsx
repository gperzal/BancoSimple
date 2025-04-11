// src/modules/dashboard/common/page/DashboardPage.tsx

"use client";
import { ReactNode } from "react";
import Layout from "@/modules/dashboard/common/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  CreditCard,
  Gift,
  PlusCircle,
  TrendingUp,
  RefreshCw,
  ArrowRight,
  Bell,
} from "lucide-react";
import AccountBalance from "@/modules/dashboard/cards/components/AccountBalance";
import TransactionsTable from "@/modules/dashboard/transactions/components/TransactionsTable";

export default function DashboardPage() {
  const userName = "Juan";
  const currentDate = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedDate =
    currentDate.charAt(0).toUpperCase() + currentDate.slice(1);

  return (
    <Layout>
      <section className="container mx-auto py-6 space-y-6">
        {/* Bienvenida con fecha actual */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-primary/10 dark:bg-primary/20 rounded-xl  animate-fade-in">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-2">
              Bienvenido, {userName}
            </h1>
            <p className="text-muted-foreground mt-1">{formattedDate}</p>
          </div>
          <div className="flex mt-4 sm:mt-0 gap-2">
            <Button
              variant="outline"
              className="button-outline-auto flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" /> Actualizar
            </Button>
            <Button
              variant="default"
              className="button-primary-auto flex items-center gap-2"
            >
              <Bell className="w-4 h-4" /> Notificaciones
              <Badge className="ml-1 bg-white text-primary">3</Badge>
            </Button>
          </div>
        </div>

        {/* Cartas de resumen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-primary/20 hover:border-primary/50 transition-all shadow-sm hover:shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-md font-medium">Saldo Total</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$24,580.45</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="inline-flex items-center text-green-600 font-medium">
                  <TrendingUp className="w-3 h-3 mr-1" /> +2.5%
                </span>{" "}
                desde el mes pasado
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/50 transition-all shadow-sm hover:shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-md font-medium">
                Tarjetas Activas
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground mt-1">
                Débito (1), Crédito (2)
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/50 transition-all shadow-sm hover:shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-md font-medium">Promociones</CardTitle>
              <Gift className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-primary font-medium">2 nuevas</span> esta
                semana
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mis cuentas y transacciones */}
        <div className="mt-6 animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-primary/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-semibold flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-primary" /> Mis Cuentas
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Vista general de tus balances y movimientos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AccountBalance />
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xl font-semibold flex items-center">
                <RefreshCw className="h-5 w-5 mr-2 text-primary" /> Últimas
                Transferencias
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                className="button-outline-auto"
              >
                Ver todas <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </CardHeader>
            <CardDescription className="text-sm text-muted-foreground">
              Vista general de tus balances y movimientos
            </CardDescription>
            <CardContent>
              <TransactionsTable limit={5} />
            </CardContent>
          </Card>
        </div>

        {/* Acciones rápidas / promociones */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
          <Button variant="outline" className="button-outline-auto">
            <PlusCircle className="w-4 h-4 text-primary" /> Solicitar nuevo
            producto
          </Button>
          <Button variant="outline" className="button-outline-auto">
            <CreditCard className="w-4 h-4 text-primary" /> Ver mis tarjetas
          </Button>
          <Button variant="default" className="button-outline-auto">
            <Gift className="w-4 h-4" /> Promociones activas
          </Button>
        </div>
      </section>
    </Layout>
  );
}

function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`px-1.5 py-0.5 rounded-full text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}
