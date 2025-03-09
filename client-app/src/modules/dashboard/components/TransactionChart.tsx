import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const TransactionChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Movimientos</CardTitle>
        <CardDescription>Ingresos y egresos del último mes</CardDescription>
      </CardHeader>
      <CardContent className="px-2">
        <div className="h-[200px] w-full">
          {/* Chart placeholder */}
          <div className="flex h-full w-full flex-col items-center justify-center rounded-md border border-dashed border-gray-300 p-4 text-center">
            <p className="text-sm text-muted-foreground">Gráfico de movimientos</p>
            <p className="text-xs text-muted-foreground mt-2">
              (En una implementación real, aquí se mostraría un gráfico de barras o líneas)
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default TransactionChart

