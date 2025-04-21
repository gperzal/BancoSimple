import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, BarChart, PieChart, TrendingUp } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FinancialInsights() {
  return (
    <Card className="border-primary/20">
      <CardHeader className="p-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          <CardTitle className="text-lg font-semibold">Análisis Financiero</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <Tabs defaultValue="spending">
          <TabsList className="grid grid-cols-3 mb-3 h-8">
            <TabsTrigger value="spending" className="tabs-trigger-primary text-xs">
              Gastos
            </TabsTrigger>
            <TabsTrigger value="income" className="tabs-trigger-primary text-xs">
              Ingresos
            </TabsTrigger>
            <TabsTrigger value="savings" className="tabs-trigger-primary text-xs">
              Ahorros
            </TabsTrigger>
          </TabsList>

          <TabsContent value="spending" className="space-y-3 mt-0">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-sm">Distribución de Gastos</h3>
              <div className="flex items-center gap-1">
                <PieChart className="h-3 w-3 text-primary" />
                <span className="text-xs">Abril 2023</span>
              </div>
            </div>

            <div className="h-40 flex items-center justify-center bg-muted/50 rounded-lg">
              <div className="text-center space-y-1">
                <PieChart className="h-8 w-8 mx-auto text-primary/50" />
                <p className="text-xs text-muted-foreground">Gráfico de distribución de gastos</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded-lg bg-muted/50">
                <p className="text-xs text-muted-foreground">Gasto Total</p>
                <p className="text-sm font-bold">$4,250</p>
              </div>
              <div className="p-2 rounded-lg bg-muted/50">
                <p className="text-xs text-muted-foreground">Promedio</p>
                <p className="text-sm font-bold">$142/día</p>
              </div>
              <div className="p-2 rounded-lg bg-muted/50">
                <p className="text-xs text-muted-foreground">vs. Anterior</p>
                <p className="text-sm font-bold text-green-600">-5.2%</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="income" className="space-y-3 mt-0">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-sm">Fuentes de Ingreso</h3>
              <div className="flex items-center gap-1">
                <BarChart className="h-3 w-3 text-primary" />
                <span className="text-xs">Abril 2023</span>
              </div>
            </div>

            <div className="h-40 flex items-center justify-center bg-muted/50 rounded-lg">
              <div className="text-center space-y-1">
                <BarChart className="h-8 w-8 mx-auto text-primary/50" />
                <p className="text-xs text-muted-foreground">Gráfico de fuentes de ingreso</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded-lg bg-muted/50">
                <p className="text-xs text-muted-foreground">Ingreso Total</p>
                <p className="text-sm font-bold">$7,500</p>
              </div>
              <div className="p-2 rounded-lg bg-muted/50">
                <p className="text-xs text-muted-foreground">Ingreso Neto</p>
                <p className="text-sm font-bold">$5,625</p>
              </div>
              <div className="p-2 rounded-lg bg-muted/50">
                <p className="text-xs text-muted-foreground">vs. Anterior</p>
                <p className="text-sm font-bold text-green-600">+3.8%</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="savings" className="space-y-3 mt-0">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-sm">Progreso de Ahorro</h3>
              <div className="flex items-center gap-1">
                <LineChart className="h-3 w-3 text-primary" />
                <span className="text-xs">Últimos 6 meses</span>
              </div>
            </div>

            <div className="h-40 flex items-center justify-center bg-muted/50 rounded-lg">
              <div className="text-center space-y-1">
                <LineChart className="h-8 w-8 mx-auto text-primary/50" />
                <p className="text-xs text-muted-foreground">Gráfico de progreso de ahorro</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded-lg bg-muted/50">
                <p className="text-xs text-muted-foreground">Ahorro Total</p>
                <p className="text-sm font-bold">$32,450</p>
              </div>
              <div className="p-2 rounded-lg bg-muted/50">
                <p className="text-xs text-muted-foreground">Meta Anual</p>
                <p className="text-sm font-bold">$50,000</p>
              </div>
              <div className="p-2 rounded-lg bg-muted/50">
                <p className="text-xs text-muted-foreground">Progreso</p>
                <p className="text-sm font-bold text-primary">64.9%</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
