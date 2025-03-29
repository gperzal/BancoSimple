import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { transactions } from "@/utils/mockData";

interface HistorySummaryProps {
  totalIncoming: number;
  totalOutgoing: number;
  periodLabel: string;
}

export default function HistorySummary({
  totalIncoming,
  totalOutgoing,
  periodLabel,
}: HistorySummaryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium flex items-center gap-2">
            <ArrowDownLeft className="h-4 w-4 text-bank-success" /> Ingresos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-bank-success">
            {totalIncoming.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </p>
          <p className="text-xs text-muted-foreground mt-1">{periodLabel}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium flex items-center gap-2">
            <ArrowUpRight className="h-4 w-4 text-bank-error" /> Egresos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-bank-error">
            {totalOutgoing.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </p>
          <p className="text-xs text-muted-foreground mt-1">{periodLabel}</p>
        </CardContent>
      </Card>

      <Card className="hidden md:block">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">
            Balance neto estimado
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-foreground">
            {(totalIncoming - totalOutgoing).toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Basado en ingresos y egresos
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

// Cálculos simulados para uso temporal
const totalIncoming = transactions
  .filter((t) => t.producto_id_origen === null)
  .reduce((acc, t) => acc + t.monto, 0);

const totalOutgoing = transactions
  .filter((t) => t.producto_id_origen !== null)
  .reduce((acc, t) => acc + t.monto, 0);

export const mockSummaryData = {
  totalIncoming,
  totalOutgoing,
  periodLabel: "Últimos 30 días",
};
