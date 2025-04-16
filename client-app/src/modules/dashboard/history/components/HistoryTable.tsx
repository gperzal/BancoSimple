import { transactions } from "@/utils/mockData";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EmptyState from "../../transactions/components/EmptyState";
import { cn } from "@/lib/utils";

export default function HistoryTable() {
  if (!transactions || transactions.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="card overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="table-header">
            <TableHead>Fecha</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Referencia</TableHead>
            <TableHead className="text-right">Monto</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow key={tx.id} className="table-row-hover">
              <TableCell className="table-cell text-muted-foreground">
                {new Date(tx.fecha).toLocaleDateString("es-CL", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </TableCell>
              <TableCell className="table-cell font-medium max-w-xs truncate">
                {tx.descripcion || "Transferencia bancaria"}
              </TableCell>
              <TableCell className="table-cell capitalize text-muted-foreground">
                {tx.categoria || "Sin categoría"}
              </TableCell>
              <TableCell className="table-cell text-xs text-muted-foreground">
                {tx.referencia_externa ?? "-"}
              </TableCell>
              <TableCell className="table-cell text-right">
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
