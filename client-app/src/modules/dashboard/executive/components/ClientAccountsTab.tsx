import { Badge } from "@/components/ui/badge"
import { CreditCard } from "lucide-react"

export function ClientAccountsTab() {
  const accounts = [
    {
      type: "Cuenta Corriente",
      number: "****5678",
      balance: "$12,345.67",
      status: "Activa",
    },
    {
      type: "Cuenta de Ahorros",
      number: "****9012",
      balance: "$5,432.10",
      status: "Activa",
    },
  ]

  const cards = [
    {
      type: "Tarjeta de Crédito",
      number: "****4321",
      limit: "$10,000.00",
      available: "$7,500.00",
      status: "Activa",
    },
    {
      type: "Tarjeta de Débito",
      number: "****8765",
      linked: "Cuenta Corriente",
      status: "Activa",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <h3 className="font-medium">Cuentas Activas</h3>
        <div className="space-y-3">
          {accounts.map((account, index) => (
            <div key={index} className="p-4 rounded-lg border border-border flex justify-between items-center">
              <div>
                <p className="font-medium">{account.type}</p>
                <p className="text-sm text-muted-foreground">{account.number}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">{account.balance}</p>
                <Badge className="bg-green-500 text-white">{account.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t">
        <h3 className="font-medium mb-3">Tarjetas</h3>
        <div className="space-y-3">
          {cards.map((card, index) => (
            <div key={index} className="p-4 rounded-lg border border-border flex justify-between items-center">
              <div className="flex items-center gap-3">
                <CreditCard className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">{card.type}</p>
                  <p className="text-sm text-muted-foreground">{card.number}</p>
                </div>
              </div>
              <div className="text-right">
                {card.limit && (
                  <p className="text-sm">
                    Disponible: {card.available} / {card.limit}
                  </p>
                )}
                {card.linked && <p className="text-sm">Vinculada a: {card.linked}</p>}
                <Badge className="bg-green-500 text-white mt-1">{card.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
