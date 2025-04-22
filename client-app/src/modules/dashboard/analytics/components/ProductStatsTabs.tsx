// src/modules/dashboard/analytics/components/ProductStatsTabs.tsx

import { Fragment } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, List } from "lucide-react";
interface Product {
  name: string;
  usuarios: number;
}

interface ProductStatsTabsProps {
  data: Product[];
}

export const ProductStatsTabs = ({ data }: ProductStatsTabsProps) => {
  const total = data.reduce((acc, item) => acc + item.usuarios, 0);

  return (
    <div className="dashboard-card">
      <div className="pb-4">
        <p className="text-lg font-semibold text-foreground mb-1">
          Distribución de Productos Financieros
        </p>
        <p className="text-sm text-muted-foreground mb-2">
          Usuarios por tipo de producto
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-transparent border border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] p-1 rounded-xl">
          <TabsTrigger value="chart" className="tabs-trigger-primary">
            <BarChart className="h-4 w-4 mr-2" />
            Gráfico
          </TabsTrigger>
          <TabsTrigger value="details" className="tabs-trigger-primary">
            <List className="h-4 w-4 mr-2" />
            Detalles
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chart">
          <div className="text-muted-foreground text-sm text-center py-10">
            Gráfico de productos próximamente...
          </div>
        </TabsContent>

        <TabsContent value="details" className="space-y-4">
          <div className="grid grid-cols-3 gap-4 py-4 text-sm font-medium text-muted-foreground border-b pb-2">
            <div>Producto</div>
            <div>Usuarios</div>
            <div>Porcentaje</div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {data.map((product, i) => (
              <Fragment key={i}>
                <div>{product.name}</div>
                <div>{product.usuarios.toLocaleString()}</div>
                <div className="flex items-center gap-2">
                  <div className="w-full h-2 rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-primary"
                      style={{
                        width: `${((product.usuarios / total) * 100).toFixed(
                          0
                        )}%`,
                      }}
                    />
                  </div>
                  <span className="text-xs">
                    {((product.usuarios / total) * 100).toFixed(1)}%
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
