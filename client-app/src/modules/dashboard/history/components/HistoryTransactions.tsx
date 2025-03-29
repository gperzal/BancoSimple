// modules/dashboard/history/components/HistoryTransactions.tsx

import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { transactions } from "@/utils/mockData";

export default function HistoryTransactions() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Historial detallado
        </CardTitle>
      </CardHeader>

      <CardContent className="divide-y divide-border">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex justify-between items-center py-3 hover:bg-muted/40 px-2 rounded-md transition"
          >
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "rounded-full p-2",
                  tx.producto_id_origen === null
                    ? "bg-bank-success/10 text-bank-success"
                    : "bg-bank-error/10 text-bank-error"
                )}
              >
                {tx.producto_id_origen === null ? (
                  <ArrowDownLeft className="h-4 w-4" />
                ) : (
                  <ArrowUpRight className="h-4 w-4" />
                )}
              </div>
              <div>
                <p className="font-medium text-sm">
                  {tx.descripcion || "Transferencia bancaria"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {new Date(tx.fecha).toLocaleDateString("es-CL", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                  {tx.referencia_externa && (
                    <span className="ml-2">- Ref: {tx.referencia_externa}</span>
                  )}
                </p>
              </div>
            </div>
            <div className="text-right text-sm font-medium">
              <span
                className={cn(
                  tx.producto_id_origen === null
                    ? "text-bank-success"
                    : "text-bank-error"
                )}
              >
                {tx.producto_id_origen === null ? "+" : "-"}
                {tx.monto.toLocaleString("es-CL", {
                  style: "currency",
                  currency: tx.moneda,
                })}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
