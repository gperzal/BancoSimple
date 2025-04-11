import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EmptyState from "../components/EmptyState";
import { transactions } from "@/utils/mockData";
import { cn } from "@/lib/utils";

export interface Transaction {
  id: number;
  producto_id_origen: number | null;
  producto_id_destino: number | null;
  monto: number;
  moneda: string;
  descripcion?: string;
  categoria?: string;
  referencia_externa?: string | null;
  estado_id?: number;
  fecha: string;
}

interface TransactionsTableProps {
  limit?: number;
}

export default function TransactionsTable({ limit }: TransactionsTableProps) {
  const displayedTransactions = limit
    ? transactions.slice(0, limit)
    : transactions;

  if (!displayedTransactions || displayedTransactions.length === 0) {
    return <EmptyState />;
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Fecha</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Referencia</TableHead>
            <TableHead className="text-right">Monto</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedTransactions.map((tx) => (
            <TableRow key={tx.id}>
              <TableCell className="text-sm text-muted-foreground">
                {new Date(tx.fecha).toLocaleDateString("es-CL", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </TableCell>
              <TableCell className="max-w-xs">
                <span className="font-medium">
                  {tx.descripcion || "Transferencia bancaria"}
                </span>
              </TableCell>
              <TableCell className="capitalize">
                {tx.categoria || "sin categoría"}
              </TableCell>
              <TableCell className="text-xs text-muted-foreground">
                {tx.referencia_externa ?? "—"}
              </TableCell>
              <TableCell className="text-right">
                <span
                  className={cn(
                    "flex items-center justify-end font-semibold text-sm",
                    tx.producto_id_origen === null
                      ? "text-bank-success"
                      : "text-bank-error"
                  )}
                >
                  {tx.producto_id_origen === null ? (
                    <ArrowDownLeft className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                  )}
                  {tx.monto.toLocaleString("es-CL", {
                    style: "currency",
                    currency: tx.moneda,
                  })}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
