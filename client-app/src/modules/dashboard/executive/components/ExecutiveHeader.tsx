import { Button } from "@/components/ui/button"
import { Clock, UserCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ExecutiveHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-primary/10 dark:bg-primary/20 rounded-xl p-6 animate-fade-in">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-2">Atención al Cliente</h1>
        <p className="text-muted-foreground mt-1">Gestión y soporte a clientes</p>
      </div>
      <div className="flex mt-4 sm:mt-0 gap-2">
        <Button variant="outline" className="button-outline-auto flex items-center gap-2">
          <Clock className="w-4 h-4" /> Historial de Atención
        </Button>
        <Button variant="default" className="button-primary-auto flex items-center gap-2">
          <UserCheck className="w-4 h-4" /> Clientes Asignados
          <Badge className="ml-1 bg-white text-primary">5</Badge>
        </Button>
      </div>
    </div>
  )
}
