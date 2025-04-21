import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Wallet, TrendingUp, DollarSign } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export function AccountsSummary() {
  const accounts = [
    {
      type: "Cuenta Corriente Premium",
      number: "****5678",
      balance: "$12,345.67",
      icon: Wallet,
      color: "bg-blue-500",
    },
    {
      type: "Cuenta de Ahorros",
      number: "****9012",
      balance: "$5,432.10",
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      type: "Tarjeta de Crédito Platinum",
      number: "****4321",
      balance: "$2,500.00",
      limit: "$10,000.00",
      icon: CreditCard,
      color: "bg-purple-500",
      isCredit: true,
      usage: 25,
    },
    {
      type: "Inversiones",
      number: "****7890",
      balance: "$25,000.00",
      growth: "+5.2%",
      icon: TrendingUp,
      color: "bg-amber-500",
      isInvestment: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {accounts.map((account, index) => (
        <Card key={index} className="dashboard-card p-3 hover:border-primary/50 hover:shadow-md transition-all">
          <CardHeader className="p-3 pb-0">
            <div className="flex justify-between items-start">
              <CardTitle className="dashboard-card-title truncate" title={account.type}>
                {account.type}
              </CardTitle>
              <div className={cn("dashboard-card-icon", account.color)}>
                <account.icon className="h-3.5 w-3.5 text-white" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">{account.number}</p>
          </CardHeader>
          <CardContent className="p-3 pt-2">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="dashboard-card-value">{account.balance}</span>
                {account.isInvestment && <span className="text-green-600 font-medium text-xs">{account.growth}</span>}
              </div>

              {account.isCredit && (
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Límite: {account.limit}</span>
                    <span>{account.usage}% utilizado</span>
                  </div>
                  <Progress value={account.usage} className="h-1.5" />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
