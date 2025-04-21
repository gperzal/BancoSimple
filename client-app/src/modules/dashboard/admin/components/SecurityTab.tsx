import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldAlert, Lock } from "lucide-react"

export function SecurityTab() {
  const accessPolicies = [
    "Autenticación de dos factores",
    "Bloqueo después de 3 intentos fallidos",
    "Cambio de contraseña cada 30 días",
    "Sesiones activas máximas: 2",
  ]

  const securityMonitoring = [
    "Detección de actividad sospechosa",
    "Alertas de inicio de sesión",
    "Registro de auditoría",
    "Monitoreo de transacciones",
  ]

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <ShieldAlert className="h-5 w-5 mr-2 text-primary" /> Configuración de Seguridad
        </CardTitle>
        <CardDescription>Administre la configuración de seguridad del sistema</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Políticas de Acceso</h3>
              <div className="space-y-2">
                {accessPolicies.map((policy, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{policy}</span>
                    <Button variant="outline" size="sm">
                      Configurar
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Monitoreo de Seguridad</h3>
              <div className="space-y-2">
                {securityMonitoring.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{feature}</span>
                    <Button variant="outline" size="sm">
                      Configurar
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <h3 className="text-lg font-medium mb-4">Acciones de Seguridad</h3>
            <div className="flex flex-wrap gap-3">
              <Button className="button-primary-auto">
                <Lock className="h-4 w-4 mr-1" /> Bloquear Todas las Cuentas
              </Button>
              <Button className="button-outline-auto">Reiniciar Contraseñas de Administrador</Button>
              <Button className="button-outline-auto">Ejecutar Auditoría de Seguridad</Button>
              <Button className="button-outline-auto">Actualizar Certificados SSL</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
