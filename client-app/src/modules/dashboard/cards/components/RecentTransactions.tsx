// modules/dashboard/cards/components/RecentTransactions.tsx

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transacciones recientes</CardTitle>
        <CardDescription>Últimos movimientos de tus tarjetas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center gap-4">
              <Avatar className="h-9 w-9">
                <AvatarFallback>{transaction.icon}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {transaction.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {transaction.date}
                </p>
              </div>
              <div
                className={
                  transaction.amount > 0
                    ? "text-green-500 font-medium"
                    : "text-red-500 font-medium"
                }
              >
                {transaction.amount > 0 ? "+" : "-"}$
                {Math.abs(transaction.amount).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
