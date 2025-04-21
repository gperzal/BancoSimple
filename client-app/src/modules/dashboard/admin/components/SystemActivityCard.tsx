import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BarChart4 } from "lucide-react"

export function SystemActivityCard() {
  const activityData = [
    { label: "Carga del Servidor", value: "68%" },
    { label: "Tiempo de Respuesta", value: "120ms" },
    { label: "Usuarios Conectados", value: "1,245" },
    { label: "Transacciones por Minuto", value: "87" },
  ]

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <BarChart4 className="h-5 w-5 mr-2 text-primary" /> Actividad del Sistema
        </CardTitle>
        <CardDescription>Monitoreo en tiempo real de la actividad</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activityData.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{item.label}</span>
              <span className="font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
