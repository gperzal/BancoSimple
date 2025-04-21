import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlusCircle } from "lucide-react"

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

interface ClientCasesTabProps {
  client: Client
}

export function ClientCasesTab({ client }: ClientCasesTabProps) {
  const historicalCases = [
    {
      title: "Problema con la aplicación móvil",
      date: "15/03/2023",
      status: "Resuelto",
    },
    {
      title: "Consulta sobre productos de inversión",
      date: "02/02/2023",
      status: "Resuelto",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Casos de Soporte</h3>
        <Button className="button-primary-auto">
          <PlusCircle className="h-4 w-4 mr-1" /> Nuevo Caso
        </Button>
      </div>

      {client.pendingIssues ? (
        <div className="space-y-3">
          {Array.from({ length: client.pendingIssues }).map((_, index) => (
            <div key={index} className="p-4 rounded-lg border border-border">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">
                    {index === 0
                      ? "Problema con transferencia"
                      : index === 1
                        ? "Actualización de datos personales"
                        : "Consulta sobre estado de cuenta"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Caso #{Math.floor(Math.random() * 10000)} •{" "}
                    {index === 0
                      ? "Abierto hace 2 días"
                      : index === 1
                        ? "Abierto hace 1 semana"
                        : "Abierto hace 3 días"}
                  </p>
                </div>
                <Badge
                  className={`${index === 0 ? "bg-yellow-500" : index === 1 ? "bg-red-500" : "bg-blue-500"} text-white`}
                >
                  {index === 0 ? "En Proceso" : index === 1 ? "Alta Prioridad" : "Pendiente"}
                </Badge>
              </div>
              <p className="text-sm mt-2">
                {index === 0
                  ? "Cliente reporta que una transferencia no llegó al destinatario aunque fue debitada de su cuenta."
                  : index === 1
                    ? "Cliente necesita actualizar su dirección y teléfono de contacto."
                    : "Cliente solicita aclaración sobre cargos en su estado de cuenta."}
              </p>
              <div className="flex justify-end mt-3">
                <Button variant="outline" size="sm">
                  Ver Detalles
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 text-center border rounded-lg">
          <p className="text-muted-foreground">No hay casos de soporte abiertos para este cliente.</p>
        </div>
      )}

      <div className="pt-4 border-t">
        <h3 className="font-medium mb-3">Historial de Casos</h3>
        <div className="space-y-3">
          {historicalCases.map((case_, index) => (
            <div key={index} className="p-4 rounded-lg border border-border flex justify-between items-center">
              <div>
                <p className="font-medium">{case_.title}</p>
                <p className="text-sm text-muted-foreground">{case_.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-500 text-white">{case_.status}</Badge>
                <Button variant="ghost" size="sm">
                  Detalles
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
