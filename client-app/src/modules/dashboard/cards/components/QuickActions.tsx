import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, AlertTriangle, DollarSign, PlusCircle } from "lucide-react"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Acciones rápidas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="button-outline-auto h-auto py-3 flex flex-col gap-2 items-center justify-center"
          >
            <Lock className="h-5 w-5 text-primary" />
            <span>Bloquear tarjeta</span>
          </Button>
          <Button
            variant="outline"
            className="button-outline-auto h-auto py-3 flex flex-col gap-2 items-center justify-center"
          >
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <span>Reportar problema</span>
          </Button>
          <Button
            variant="outline"
            className="button-outline-auto h-auto py-3 flex flex-col gap-2 items-center justify-center"
          >
            <DollarSign className="h-5 w-5 text-green-500" />
            <span>Realizar pago</span>
          </Button>
          <Button
            variant="outline"
            className="button-outline-auto h-auto py-3 flex flex-col gap-2 items-center justify-center"
          >
            <PlusCircle className="h-5 w-5 text-blue-500" />
            <span>Solicitar adicional</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
