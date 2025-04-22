import { Button } from "@/components/ui/button"
import { Download, UserCog } from "lucide-react"

export function RolesHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-primary/10 dark:bg-primary/20 rounded-xl p-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-primary mb-2">Gestión de Roles</h1>
        <p className="text-muted-foreground mt-1">
          Asigna y administra los roles de acceso de los usuarios del sistema
        </p>
      </div>
      <div className="flex mt-4 sm:mt-0 gap-2">
        <Button variant="outline" className="button-outline-auto flex items-center gap-2">
          <Download className="w-4 h-4" /> Exportar Roles
        </Button>
        <Button variant="default" className="button-primary-auto flex items-center gap-2">
          <UserCog className="w-4 h-4" /> Configurar Permisos
        </Button>
      </div>
    </div>
  )
}
