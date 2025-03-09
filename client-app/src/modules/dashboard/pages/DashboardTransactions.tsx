import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@shadcn/card";

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
}

const DashboardTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Simulación de llamada a API
    setTimeout(() => {
      setTransactions([
        { id: "1", description: "Depósito", amount: 500, date: "2023-05-15" },
        { id: "2", description: "Retiro", amount: 120, date: "2023-05-14" },
        {
          id: "3",
          description: "Transferencia",
          amount: 250,
          date: "2023-05-12",
        },
      ]);
    }, 1000);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Historial de Transacciones</CardTitle>
      </CardHeader>
      <CardContent>
        {transactions.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Cargando transacciones...
          </p>
        ) : (
          <ul className="space-y-2">
            {transactions.map((tx) => (
              <li key={tx.id} className="flex justify-between text-sm">
                <span>{tx.description}</span>
                <span>${tx.amount.toFixed(2)}</span>
                <span>{tx.date}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default DashboardTransactions;
