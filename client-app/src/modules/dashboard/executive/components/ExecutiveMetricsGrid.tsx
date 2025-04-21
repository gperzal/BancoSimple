import { Users, Clock, FileText } from "lucide-react"
import { MetricCard } from "../../admin/components/MetricCard"

export function ExecutiveMetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <MetricCard
        title="Clientes Atendidos Hoy"
        value="12"
        icon={<Users className="h-4 w-4" />}
        description="Meta diaria: 15"
        descriptionColor="text-primary"
      />

      <MetricCard
        title="Tiempo Promedio"
        value="8:45 min"
        icon={<Clock className="h-4 w-4" />}
        description="Por debajo del objetivo"
        descriptionColor="text-green-600"
      />

      <MetricCard
        title="Casos Pendientes"
        value="7"
        icon={<FileText className="h-4 w-4" />}
        description="3 de alta prioridad"
        descriptionColor="text-yellow-500"
      />
    </div>
  )
}
