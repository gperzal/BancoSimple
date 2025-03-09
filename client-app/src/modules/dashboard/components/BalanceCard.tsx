import { CreditCard } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/context/AuthContext"

const BalanceCard = () => {
  const { user } = useAuth()

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Saldo Disponible</CardTitle>
        <CreditCard className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${user?.balance.toLocaleString()}</div>
        <p className="text-xs text-muted-foreground">Actualizado: {new Date().toLocaleDateString()}</p>
      </CardContent>
    </Card>
  )
}

export default BalanceCard

