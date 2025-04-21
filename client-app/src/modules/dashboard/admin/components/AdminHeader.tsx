import { Button } from "@/components/ui/button"
import { Download, Settings } from "lucide-react"

export function AdminHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-primary/10 dark:bg-primary/20 rounded-xl p-6 animate-fade-in">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-2">Panel de Administración</h1>
        <p className="text-muted-foreground mt-1">Gestión y monitoreo del sistema bancario</p>
      </div>
      <div className="flex mt-4 sm:mt-0 gap-2">
        <Button variant="outline" className="button-outline-auto flex items-center gap-2">
          <Download className="w-4 h-4" /> Exportar Datos
        </Button>
        <Button variant="default" className="button-primary-auto flex items-center gap-2">
          <Settings className="w-4 h-4" /> Configuración
        </Button>
      </div>
    </div>
  )
}
