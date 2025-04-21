import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, ArrowUpRight, ArrowDownLeft, Filter, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function RecentActivity() {
  const activities = [
    {
      type: "Transferencia Enviada",
      description: "A Carlos Rodríguez",
      amount: "$500.00",
      date: "Hoy, 10:45 AM",
      isIncoming: false,
    },
    {
      type: "Depósito",
      description: "Transferencia recibida",
      amount: "$2,300.00",
      date: "Hoy, 09:30 AM",
      isIncoming: true,
    },
    {
      type: "Pago de Tarjeta",
      description: "Tarjeta de Crédito Platinum",
      amount: "$1,200.00",
      date: "Ayer, 15:20 PM",
      isIncoming: false,
    },
    {
      type: "Compra",
      description: "Amazon.com",
      amount: "$89.99",
      date: "Ayer, 11:15 AM",
      isIncoming: false,
    },
  ]

  return (
    <Card className="border-primary/20">
      <CardHeader className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <CardTitle className="text-lg font-semibold">Actividad Reciente</CardTitle>
          </div>
          <Button variant="ghost" size="sm" className="h-8 px-2 flex items-center gap-1">
            <Filter className="h-3 w-3" /> Filtrar
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className="space-y-2">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 rounded-lg border hover:border-primary/50 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-2 min-w-0">
                <div
                  className={cn(
                    "p-1.5 rounded-full shrink-0",
                    activity.isIncoming ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500",
                  )}
                >
                  {activity.isIncoming ? <ArrowDownLeft className="h-3 w-3" /> : <ArrowUpRight className="h-3 w-3" />}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm truncate" title={activity.type}>
                    {activity.type}
                  </p>
                  <p className="text-xs text-muted-foreground truncate" title={activity.description}>
                    {activity.description}
                  </p>
                </div>
              </div>
              <div className="text-right shrink-0 ml-2">
                <p className={cn("font-semibold text-sm", activity.isIncoming ? "text-green-600" : "text-red-500")}>
                  {activity.isIncoming ? "+" : "-"}
                  {activity.amount}
                </p>
                <p className="text-xs text-muted-foreground">{activity.date}</p>
              </div>
            </div>
          ))}
          <Button variant="ghost" className="w-full text-primary text-xs flex items-center justify-center gap-1">
            Ver todas las transacciones <ChevronRight className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
