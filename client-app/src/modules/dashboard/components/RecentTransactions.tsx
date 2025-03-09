import { ArrowUpRight, ArrowDownLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

// Mock data for recent transactions
const transactions = [
  {
    id: "1",
    type: "deposit",
    description: "Depósito recibido",
    amount: 500,
    date: "2023-05-15T10:30:00",
    status: "completed",
  },
  {
    id: "2",
    type: "withdrawal",
    description: "Pago de servicios",
    amount: 120,
    date: "2023-05-14T15:45:00",
    status: "completed",
  },
  {
    id: "3",
    type: "deposit",
    description: "Transferencia recibida",
    amount: 250,
    date: "2023-05-12T09:15:00",
    status: "completed",
  },
  {
    id: "4",
    type: "withdrawal",
    description: "Compra en línea",
    amount: 75.5,
    date: "2023-05-10T18:20:00",
    status: "completed",
  },
]

const RecentTransactions = () => {
  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Transacciones Recientes</CardTitle>
          <CardDescription>Historial de movimientos en tu cuenta</CardDescription>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link to="/transactions">Ver todas</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div
                  className={`rounded-full p-2 ${
                    transaction.type === "deposit" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  }`}
                >
                  {transaction.type === "deposit" ? (
                    <ArrowDownLeft className="h-4 w-4" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">{transaction.description}</p>
                  <p className="text-xs text-muted-foreground">{new Date(transaction.date).toLocaleDateString()}</p>
                </div>
              </div>
              <div
                className={`text-sm font-medium ${transaction.type === "deposit" ? "text-green-600" : "text-red-600"}`}
              >
                {transaction.type === "deposit" ? "+" : "-"}${transaction.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default RecentTransactions

