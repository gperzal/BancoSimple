import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Crown, Plane, Umbrella, Coffee, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PremiumBenefits() {
  const benefits = [
    {
      title: "Seguro de Viaje Premium",
      description: "Cobertura mundial hasta $1,000,000 USD",
      icon: Plane,
      color: "text-blue-500",
      action: "Ver Detalles",
    },
    {
      title: "Asistencia 24/7",
      description: "Ejecutivo personal asignado",
      icon: ShieldCheck,
      color: "text-green-500",
      action: "Contactar",
    },
    {
      title: "Acceso a Salas VIP",
      description: "Más de 1,200 lounges en aeropuertos",
      icon: Coffee,
      color: "text-amber-500",
      action: "Ver Ubicaciones",
    },
    {
      title: "Seguro de Protección",
      description: "Cobertura para compras y fraudes",
      icon: Umbrella,
      color: "text-purple-500",
      action: "Activar",
    },
  ]

  return (
    <Card className="border-primary/20">
      <CardHeader className="p-3">
        <div className="flex items-center gap-2">
          <Crown className="h-4 w-4 text-amber-500" />
          <CardTitle className="text-lg font-semibold">Beneficios Premium</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className="grid grid-cols-1 gap-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="border rounded-lg p-2 hover:border-primary/50 hover:shadow-sm transition-all">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-full bg-muted ${benefit.color}`}>
                  <benefit.icon className="h-3 w-3" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm truncate" title={benefit.title}>
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-muted-foreground truncate" title={benefit.description}>
                    {benefit.description}
                  </p>
                </div>
                <Button variant="link" className="p-0 h-auto text-primary text-xs">
                  {benefit.action}
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button variant="ghost" className="w-full text-primary text-xs mt-2">
          Ver todos los beneficios
        </Button>
      </CardContent>
    </Card>
  )
}
