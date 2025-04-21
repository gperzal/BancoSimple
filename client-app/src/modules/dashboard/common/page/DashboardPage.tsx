// src/modules/dashboard/common/page/DashboardPage.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
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
  Clock,
  RefreshCw,
  ArrowRight,
  Bell,
} from "lucide-react";

import { useAuth } from "@/modules/auth/hooks/useAuth";
import AccountBalance from "@/modules/dashboard/cards/components/AccountBalance";
import TransactionsTable from "@/modules/dashboard/transactions/components/TransactionsTable";

export default function DashboardPage() {
  const { auth } = useAuth();
  const userName = auth?.fullName ?? "Usuario";
  const userEmail = auth?.email ?? "";

  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setFormattedDate(
      currentDate.charAt(0).toUpperCase() + currentDate.slice(1)
    );
  }, []);

  return (
    <section className="container mx-auto space-y-6 py-4">
      {/* Bienvenida con fecha actual */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-primary/10 dark:bg-primary/20 rounded-xl animate-fade-in p-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-1">
            Bienvenido, {userName}
          </h1>
          {userEmail && (
            <p className="text-sm text-muted-foreground">{userEmail}</p>
          )}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Saldo Total"
          value="$24,580.45"
          icon={<CreditCard className="h-4 w-4" />}
          description="desde el mes pasado"
          descriptionIcon={<TrendingUp className="w-3 h-3 mr-1" />}
          descriptionColor="text-green-600"
        />

        <MetricCard
          title="Tarjetas Activas"
          value="3"
          icon={<CreditCard className="h-4 w-4" />}
          description="Débito (1), Crédito (2)"
        />

        <MetricCard
          title="Promociones"
          value="5"
          icon={<Gift className="h-4 w-4" />}
          description="2 nuevas esta semana"
          descriptionColor="text-primary"
        />

        <MetricCard
          title="Transacciones Pendientes"
          value="7"
          icon={<Clock className="h-4 w-4" />}
          description="4 vencen hoy"
          descriptionColor="text-yellow-500"
        />
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
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between w-full">
              <CardTitle className="text-lg font-semibold flex items-center">
                <RefreshCw className="h-5 w-5 mr-2 text-primary" /> Últimas
                Transferencias
              </CardTitle>
              <Button variant="ghost" size="sm" className="button-outline-auto">
                Ver todas <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <CardDescription className="text-sm text-muted-foreground mt-2">
              Vista general de tus balances y movimientos
            </CardDescription>
          </CardHeader>
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

// Subcomponente local
function MetricCard({
  title,
  value,
  icon,
  description,
  descriptionIcon,
  descriptionColor = "text-muted-foreground",
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
  descriptionIcon?: React.ReactNode;
  descriptionColor?: string;
}) {
  return (
    <div className="dashboard-card hover:border-primary/50 hover:shadow transition-all">
      <div className="flex items-center justify-between pb-2">
        <p className="dashboard-card-title">{title}</p>
        <div className="dashboard-card-icon bg-[var(--color-primary-lighter)] text-white rounded-full">
          {icon}
        </div>
      </div>
      <div className="dashboard-card-value">{value}</div>
      {description && (
        <p className={`text-xs mt-1 ${descriptionColor}`}>
          {descriptionIcon && (
            <span className="inline-flex items-center font-medium">
              {descriptionIcon}
              &nbsp;
            </span>
          )}
          {description}
        </p>
      )}
    </div>
  );
}
