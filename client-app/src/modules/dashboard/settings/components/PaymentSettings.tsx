
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Plus } from "lucide-react";

export function PaymentSettings() {
  const savedCards = [
    { id: 1, type: "Visa", last4: "4321", expiry: "12/24", isDefault: true },
    { id: 2, type: "Mastercard", last4: "8765", expiry: "04/25", isDefault: false },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Tarjetas registradas</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Administra tus tarjetas registradas para pagos
        </p>
        
        <div className="space-y-4">
          <RadioGroup defaultValue="card-1">
            {savedCards.map((card) => (
              <Card key={card.id} className={card.isDefault ? "border-primary" : ""}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <RadioGroupItem value={`card-${card.id}`} id={`card-${card.id}`} />
                      <CreditCard className="h-5 w-5" />
                      <div>
                        <p className="font-medium">
                          {card.type} •••• {card.last4}
                        </p>
                        <p className="text-sm text-muted-foreground">Expira {card.expiry}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {card.isDefault && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Predeterminada
                        </span>
                      )}
                      <Button variant="ghost" size="sm">
                        Editar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </RadioGroup>
          
          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            <Plus className="h-4 w-4" />
            Añadir nueva tarjeta
          </Button>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium">Método de pago predeterminado</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Selecciona cómo prefieres realizar tus pagos
        </p>
        
        <RadioGroup defaultValue="account-balance">
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="account-balance" id="account-balance" />
            <Label htmlFor="account-balance">Saldo de la cuenta</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="default-card" id="default-card" />
            <Label htmlFor="default-card">Tarjeta predeterminada</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="ask-each-time" id="ask-each-time" />
            <Label htmlFor="ask-each-time">Preguntar cada vez</Label>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium">Límites de transferencia</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Configura límites de seguridad para tus transferencias
        </p>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="daily-limit" className="mb-2 block">Límite diario</Label>
            <div className="flex items-center">
              <span className="bg-muted px-3 py-2 border border-r-0 rounded-l-md">$</span>
              <input
                type="number"
                id="daily-limit"
                className="flex h-10 rounded-r-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="0.00"
                defaultValue="1000000"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="monthly-limit" className="mb-2 block">Límite mensual</Label>
            <div className="flex items-center">
              <span className="bg-muted px-3 py-2 border border-r-0 rounded-l-md">$</span>
              <input
                type="number"
                id="monthly-limit"
                className="flex h-10 rounded-r-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="0.00"
                defaultValue="5000000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
