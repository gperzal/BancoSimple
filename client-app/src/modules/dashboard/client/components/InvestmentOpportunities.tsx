import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Info, Star, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function InvestmentOpportunities() {
  const opportunities = [
    {
      name: "Fondo de Inversión Global",
      type: "Renta Variable",
      risk: "Moderado",
      return: "8-12% anual",
      rating: 4.5,
      recommended: true,
    },
    {
      name: "Bonos Corporativos Premium",
      type: "Renta Fija",
      risk: "Bajo",
      return: "5-7% anual",
      rating: 4.2,
      recommended: true,
    },
  ]

  return (
    <Card className="border-primary/20">
      <CardHeader className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <CardTitle className="text-lg font-semibold">Oportunidades de Inversión</CardTitle>
          </div>
          <Button variant="link" className="text-primary text-xs p-0 h-auto flex items-center gap-1">
            Ver todas <ChevronRight className="h-3 w-3" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className="space-y-2">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className={cn(
                "p-3 rounded-lg border hover:shadow-sm transition-all",
                opportunity.recommended ? "border-primary/30 bg-primary/5" : "border-border hover:border-primary/50",
              )}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                    <h3 className="font-medium text-sm truncate" title={opportunity.name}>
                      {opportunity.name}
                    </h3>
                    {opportunity.recommended && (
                      <Badge className="bg-amber-500 text-white border-0 text-[10px] h-5">Recomendado</Badge>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span>{opportunity.type}</span>
                  <span>•</span>
                  <span>Riesgo: {opportunity.risk}</span>
                  <span>•</span>
                  <span>Retorno: {opportunity.return}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-3 w-3",
                          i < Math.floor(opportunity.rating)
                            ? "text-amber-500 fill-amber-500"
                            : "text-muted-foreground",
                          i === Math.floor(opportunity.rating) && opportunity.rating % 1 > 0
                            ? "text-amber-500 fill-amber-500"
                            : "",
                        )}
                      />
                    ))}
                    <span className="text-xs ml-1">{opportunity.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="outline" size="sm" className="button-outline-auto h-7 text-xs px-2 py-0">
                      <Info className="h-3 w-3 mr-1" /> Detalles
                    </Button>
                    <Button size="sm" className="button-primary-auto h-7 text-xs px-2 py-0">
                      Invertir
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
