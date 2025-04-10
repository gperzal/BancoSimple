import { useState } from "react";
import Layout from "@/modules/dashboard/common/components/Layout";
import HistorySummary from "@/modules/dashboard/history/components/HistorySummary";
import HistoryToolbar from "@/modules/dashboard/history/components/HistoryToolbar";
import { transactions } from "@/utils/mockData";
import HistoryTable from "@/modules/dashboard/history/components/HistoryTable";
import Filters from "@/modules/dashboard/history/components/Filters";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HistoryPage() {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<"all" | "incoming" | "outgoing">("all");
  const [showFilters, setShowFilters] = useState(false);

  const incomingTotal = transactions
    .filter((t) => t.producto_id_origen === null)
    .reduce((sum, t) => sum + t.monto, 0);

  const outgoingTotal = transactions
    .filter((t) => t.producto_id_origen !== null)
    .reduce((sum, t) => sum + t.monto, 0);

  return (
    <Layout>
      <section className="container mx-auto space-y-6">
        <div className="mb-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-2">
            Historial de transacciones
          </h1>
          <p className="text-sm text-muted-foreground">
            Visualiza y filtra tus movimientos bancarios recientes.
          </p>
        </div>

        <HistorySummary
          totalIncoming={incomingTotal}
          totalOutgoing={outgoingTotal}
          periodLabel="Últimos 30 días"
        />

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Resumen de transacciones
          </h2>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              onClick={() => setShowFilters((prev) => !prev)}
            >
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>

        {/* Filtros renderizados fuera del header */}
        {showFilters && (
          <div className="mb-4">
            <Filters />
          </div>
        )}

        <HistoryToolbar
          currentTab={tab}
          onTabChange={setTab}
          searchTerm={search}
          onSearchChange={setSearch}
        />

        <HistoryTable />
      </section>
    </Layout>
  );
}
