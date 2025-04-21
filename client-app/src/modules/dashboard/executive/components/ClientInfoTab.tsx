import { Button } from "@/components/ui/button"
import { Calendar, Mail, Phone } from "lucide-react"

interface Client {
  id: string
  name: string
  email: string
  phone: string
  status: string
  lastContact: string
  accountType: string
  pendingIssues: number
}

interface ClientInfoTabProps {
  client: Client
}

export function ClientInfoTab({ client }: ClientInfoTabProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <h3 className="font-medium">Información de Contacto</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{client.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{client.phone}</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-medium">Próximas Citas</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>No hay citas programadas</span>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-2">
              <Calendar className="h-4 w-4 mr-1" /> Programar Cita
            </Button>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t">
        <h3 className="font-medium mb-3">Notas del Cliente</h3>
        <div className="space-y-2">
          <div className="p-3 rounded-lg border border-border">
            <p className="text-sm">
              Cliente interesado en actualizar su plan de cuenta a Premium. Contactar para ofrecer promoción de
              actualización.
            </p>
            <p className="text-xs text-muted-foreground mt-1">Agregado: 15/04/2023 por Carlos Rodríguez</p>
          </div>
          <div className="p-3 rounded-lg border border-border">
            <p className="text-sm">
              Cliente reportó problemas con la aplicación móvil. Se le proporcionó asistencia y se resolvió el problema.
            </p>
            <p className="text-xs text-muted-foreground mt-1">Agregado: 02/03/2023 por Ana Martínez</p>
          </div>
        </div>
        <Button variant="outline" size="sm" className="w-full mt-3">
          <PlusCircle className="h-4 w-4 mr-1" /> Agregar Nota
        </Button>
      </div>
    </div>
  )
}

import { PlusCircle } from "lucide-react"
