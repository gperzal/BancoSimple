import { useState } from "react";
import Layout from "@/modules/dashboard/common/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  Wallet,
  Users,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  monthlyTransactionData,
  categoryData,
  productData,
} from "@/utils/mockData";

const COLORS = ["#8B5CF6", "#D946EF", "#F97316", "#0EA5E9", "#10B981"];

const AnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState("6m");

  return (
    <Layout>
      <section className="container mx-auto py-6 space-y-6">
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
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Seleccionar período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30d">Últimos 30 días</SelectItem>
                <SelectItem value="3m">Últimos 3 meses</SelectItem>
                <SelectItem value="6m">Últimos 6 meses</SelectItem>
                <SelectItem value="1y">Último año</SelectItem>
              </SelectContent>
            </Select>
            <Button>Exportar</Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Transacciones
                  </p>
                  <div className="flex items-baseline gap-1">
                    <h3 className="text-2xl font-bold">$32.5M</h3>
                    <span className="text-xs text-green-500 flex items-center">
                      <ArrowUpRight className="h-3 w-3" />
                      8.2%
                    </span>
                  </div>
                </div>
                <div className="p-2 bg-primary/10 text-primary rounded-full">
                  <Activity className="h-4 w-4" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Productos Activos
                  </p>
                  <div className="flex items-baseline gap-1">
                    <h3 className="text-2xl font-bold">12,431</h3>
                    <span className="text-xs text-green-500 flex items-center">
                      <ArrowUpRight className="h-3 w-3" />
                      5.3%
                    </span>
                  </div>
                </div>
                <div className="p-2 bg-purple-500/10 text-purple-500 rounded-full">
                  <CreditCard className="h-4 w-4" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Saldo Promedio
                  </p>
                  <div className="flex items-baseline gap-1">
                    <h3 className="text-2xl font-bold">$2.8M</h3>
                    <span className="text-xs text-red-500 flex items-center">
                      <ArrowDownRight className="h-3 w-3" />
                      2.1%
                    </span>
                  </div>
                </div>
                <div className="p-2 bg-blue-500/10 text-blue-500 rounded-full">
                  <Wallet className="h-4 w-4" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Usuarios Nuevos
                  </p>
                  <div className="flex items-baseline gap-1">
                    <h3 className="text-2xl font-bold">532</h3>
                    <span className="text-xs text-green-500 flex items-center">
                      <ArrowUpRight className="h-3 w-3" />
                      12.7%
                    </span>
                  </div>
                </div>
                <div className="p-2 bg-orange-500/10 text-orange-500 rounded-full">
                  <Users className="h-4 w-4" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 mt-6 md:grid-cols-2">
          <Card className="col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle>Ingresos vs Gastos</CardTitle>
              <CardDescription>
                Comparativa de flujos de efectivo en los últimos meses
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={monthlyTransactionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis
                    tickFormatter={(value) =>
                      `$${(value / 1000000).toFixed(1)}M`
                    }
                  />
                  <Tooltip
                    formatter={(value) => [
                      `$${(Number(value) / 1000000).toFixed(1)}M`,
                      undefined,
                    ]}
                    labelFormatter={(label) => `Mes: ${label}`}
                  />
                  <Legend />
                  <Bar dataKey="ingresos" fill="#8B5CF6" name="Ingresos" />
                  <Bar dataKey="gastos" fill="#F97316" name="Gastos" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle>Distribución de Gastos</CardTitle>
              <CardDescription>
                Categorías de gastos en el período
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={90}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [
                        `$${(Number(value) / 1000000).toFixed(1)}M`,
                        undefined,
                      ]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 mt-6">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Distribución de Productos Financieros</CardTitle>
              <CardDescription>Usuarios por tipo de producto</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <Tabs defaultValue="chart" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="chart">Gráfico</TabsTrigger>
                  <TabsTrigger value="details">Detalles</TabsTrigger>
                </TabsList>
                <TabsContent value="chart">
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={productData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="usuarios"
                        stroke="#8B5CF6"
                        strokeWidth={2}
                        name="Usuarios"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="details" className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 py-4">
                    <div className="font-semibold">Producto</div>
                    <div className="font-semibold">Usuarios</div>
                    <div className="font-semibold">Porcentaje</div>

                    {productData.map((product, i) => (
                      <>
                        <div key={`name-${i}`}>{product.name}</div>
                        <div key={`users-${i}`}>
                          {product.usuarios.toLocaleString()}
                        </div>
                        <div
                          key={`percent-${i}`}
                          className="flex items-center gap-2"
                        >
                          <div className="w-full h-2 rounded-full bg-gray-200">
                            <div
                              className="h-2 rounded-full bg-primary"
                              style={{
                                width: `${(
                                  (product.usuarios /
                                    productData.reduce(
                                      (acc, curr) => acc + curr.usuarios,
                                      0
                                    )) *
                                  100
                                ).toFixed(0)}%`,
                              }}
                            />
                          </div>
                          <span className="text-xs">
                            {(
                              (product.usuarios /
                                productData.reduce(
                                  (acc, curr) => acc + curr.usuarios,
                                  0
                                )) *
                              100
                            ).toFixed(1)}
                            %
                          </span>
                        </div>
                      </>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default AnalyticsPage;
