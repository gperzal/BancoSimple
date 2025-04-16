import {
  ArrowDownLeft,
  ArrowUpRight,
  LineChart,
  SendHorizonal,
} from "lucide-react";
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
  const balance = totalIncoming - totalOutgoing;

  const totalTransfers = transactions.filter(
    (t) => t.categoria === "transferencia"
  ).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {/* Ingresos */}
      <div className="dashboard-card">
        <div className="flex items-center justify-between pb-2">
          <p className="dashboard-card-title">Ingresos</p>
          <div className="dashboard-card-icon bg-green-100 text-green-600 rounded-full">
            <ArrowDownLeft className="h-4 w-4" />
          </div>
        </div>
        <p className="dashboard-card-value text-green-600">
          {totalIncoming.toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP",
          })}
        </p>
        <p className="text-xs mt-1 text-muted-foreground">{periodLabel}</p>
      </div>

      {/* Egresos */}
      <div className="dashboard-card">
        <div className="flex items-center justify-between pb-2">
          <p className="dashboard-card-title">Egresos</p>
          <div className="dashboard-card-icon bg-red-100 text-red-600 rounded-full">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
        <p className="dashboard-card-value text-red-600">
          {totalOutgoing.toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP",
          })}
        </p>
        <p className="text-xs mt-1 text-muted-foreground">{periodLabel}</p>
      </div>

      {/* Balance Neto */}
      <div className="dashboard-card hidden md:block">
        <div className="flex items-center justify-between pb-2">
          <p className="dashboard-card-title">Balance neto estimado</p>
          <div className="dashboard-card-icon bg-blue-100 text-blue-600 rounded-full">
            <LineChart className="h-4 w-4" />
          </div>
        </div>
        <p className="dashboard-card-value">
          {balance.toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP",
          })}
        </p>
        <p className="text-xs mt-1 text-muted-foreground">
          Basado en ingresos y egresos
        </p>
      </div>

      {/* Transferencias */}
      <div className="dashboard-card hidden md:block">
        <div className="flex items-center justify-between pb-2">
          <p className="dashboard-card-title">Transferencias realizadas</p>
          <div className="dashboard-card-icon bg-purple-100 text-purple-600 rounded-full">
            <SendHorizonal className="h-4 w-4" />
          </div>
        </div>
        <p className="dashboard-card-value">{totalTransfers}</p>
        <p className="text-xs mt-1 text-muted-foreground">
          Solo en los últimos 30 días
        </p>
      </div>
    </div>
  );
}
