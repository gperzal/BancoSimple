import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function AlertsCard() {
  const alertsData = [
    {
      title: "Intento de acceso no autorizado",
      time: "Hace 35 minutos",
      severity: "Alta",
    },
    {
      title: "Actualización de sistema pendiente",
      time: "Hace 2 horas",
      severity: "Media",
    },
    {
      title: "Transacción sospechosa detectada",
      time: "Hace 4 horas",
      severity: "Alta",
    },
    {
      title: "Backup automático completado",
      time: "Hace 12 horas",
      severity: "Baja",
    },
  ]

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2 text-primary" /> Alertas Recientes
        </CardTitle>
        <CardDescription>Alertas de seguridad y sistema</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alertsData.map((alert, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">{alert.title}</p>
                <p className="text-xs text-muted-foreground">{alert.time}</p>
              </div>
              <Badge
                className={`${
                  alert.severity === "Alta"
                    ? "bg-red-500"
                    : alert.severity === "Media"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                } text-white`}
              >
                {alert.severity}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
