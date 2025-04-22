import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function RecentTransactions() {
  const transactions = [
    {
      id: 1,
      name: "Supermercado XYZ",
      amount: -125.5,
      date: "Hoy, 10:30 AM",
      icon: "🛒",
    },
    {
      id: 2,
      name: "Transferencia recibida",
      amount: 350.0,
      date: "Ayer, 2:45 PM",
      icon: "💸",
    },
    {
      id: 3,
      name: "Restaurante ABC",
      amount: -45.75,
      date: "22/03/2025",
      icon: "🍔",
    },
    {
      id: 4,
      name: "Pago de servicios",
      amount: -89.99,
      date: "20/03/2025",
      icon: "📱",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Transacciones recientes</CardTitle>
        <CardDescription>Últimos movimientos de tus tarjetas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <Avatar className="h-10 w-10 bg-primary/10">
                <AvatarFallback className="text-lg">{transaction.icon}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="font-medium leading-none">{transaction.name}</p>
                <p className="text-sm text-muted-foreground">{transaction.date}</p>
              </div>
              <div className={cn("font-medium", transaction.amount > 0 ? "text-green-500" : "text-red-500")}>
                {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
