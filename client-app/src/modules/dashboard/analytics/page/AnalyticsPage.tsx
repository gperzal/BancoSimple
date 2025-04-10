// src/modules/dashboard/analytics/AnalyticsPage.tsx

import { useState } from "react";
import Layout from "@/modules/dashboard/common/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  monthlyTransactionData,
  categoryData,
  productData,
} from "@/utils/mockData";
import { AnalyticsCard } from "@/modules/dashboard/analytics/components/AnalyticsCard";
import { BarChartCard } from "@/modules/dashboard/analytics/components/BarChartCard";
import { PieChartCard } from "@/modules/dashboard/analytics/components/PieChartCard";
import { ProductStatsTabs } from "@/modules/dashboard/analytics/components/ProductStatsTabs";
import { CreditCard, Wallet, Users, Activity } from "lucide-react";

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("6m");

  return (
    <Layout>
      <section className="container mx-auto space-y-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-2">
              Analítica
            </h1>
            <p className="text-muted-foreground">
              Visualización de métricas y tendencias financieras.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="select-primary popover">
                <SelectValue placeholder="Seleccionar período" />
              </SelectTrigger>
              <SelectContent className="popover z-50">
                <SelectItem value="30d">Últimos 30 días</SelectItem>
                <SelectItem value="3m">Últimos 3 meses</SelectItem>
                <SelectItem value="6m">Últimos 6 meses</SelectItem>
                <SelectItem value="1y">Último año</SelectItem>
              </SelectContent>
            </Select>
            <Button className="button-primary-auto">Exportar</Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <AnalyticsCard
            title="Total Transacciones"
            value="$32.5M"
            change="8.2%"
            changeType="up"
            icon={<Activity className="h-4 w-4" />}
          />
          <AnalyticsCard
            title="Productos Activos"
            value="12,431"
            change="5.3%"
            changeType="up"
            icon={<CreditCard className="h-4 w-4" />}
            iconColorClass="text-purple-500 bg-purple-500/10"
          />
          <AnalyticsCard
            title="Saldo Promedio"
            value="$2.8M"
            change="2.1%"
            changeType="down"
            icon={<Wallet className="h-4 w-4" />}
            iconColorClass="text-blue-500 bg-blue-500/10"
          />
          <AnalyticsCard
            title="Contactos Nuevos"
            value="2"
            change="12.7%"
            changeType="up"
            icon={<Users className="h-4 w-4" />}
            iconColorClass="text-orange-500 bg-orange-500/10"
          />
        </div>

        <div className="grid gap-6 mt-6 md:grid-cols-2">
          <BarChartCard
            title="Ingresos vs Gastos"
            description="Comparativa de flujos de efectivo en los últimos meses"
            data={monthlyTransactionData}
          />

          <PieChartCard
            title="Distribución de Gastos"
            description="Categorías de gastos en el período"
            data={categoryData}
          />
        </div>

        <div className="grid gap-6 mt-6">
          <ProductStatsTabs data={productData} />
        </div>
      </section>
    </Layout>
  );
}
