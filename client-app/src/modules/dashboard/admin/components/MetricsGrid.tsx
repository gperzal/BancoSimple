import { Users, ShieldAlert, TrendingUp, FileText } from "lucide-react"
import { MetricCard } from "./MetricCard"

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Usuarios Activos"
        value="2,458"
        icon={<Users className="h-4 w-4" />}
        description="+125 desde el mes pasado"
        descriptionIcon={<TrendingUp className="w-3 h-3 mr-1" />}
        descriptionColor="text-green-600"
      />

      <MetricCard
        title="Alertas de Seguridad"
        value="7"
        icon={<ShieldAlert className="h-4 w-4" />}
        description="3 requieren atención"
        descriptionColor="text-red-500"
      />

      <MetricCard
        title="Transacciones Hoy"
        value="1,245"
        icon={<TrendingUp className="h-4 w-4" />}
        description="$1.2M en volumen"
        descriptionColor="text-primary"
      />

      <MetricCard
        title="Reportes Pendientes"
        value="12"
        icon={<FileText className="h-4 w-4" />}
        description="5 de alta prioridad"
        descriptionColor="text-yellow-500"
      />
    </div>
  )
}
