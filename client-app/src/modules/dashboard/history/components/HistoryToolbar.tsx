// modules/dashboard/history/components/HistoryToolbar.tsx
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, List, ArrowDownCircle, ArrowUpCircle } from "lucide-react";

interface HistoryToolbarProps {
  currentTab: string;
  onTabChange: (tab: "all" | "incoming" | "outgoing") => void; // <-- cambio aquí
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function HistoryToolbar({
  currentTab,
  onTabChange,
  searchTerm,
  onSearchChange,
}: HistoryToolbarProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
      {/* Tabs */}
      <Tabs
        value={currentTab}
        onValueChange={(value) =>
          onTabChange(value as "all" | "incoming" | "outgoing")
        }
        className="w-full md:w-auto"
      >
        <TabsList className="bg-transparent border border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] p-1 rounded-xl">
          <TabsTrigger value="all" className="tabs-trigger-primary">
            <List className="h-4 w-4 mr-2" />
            Todas
          </TabsTrigger>
          <TabsTrigger value="incoming" className="tabs-trigger-primary">
            <ArrowDownCircle className="h-4 w-4 mr-2" />
            Recibidas
          </TabsTrigger>
          <TabsTrigger value="outgoing" className="tabs-trigger-primary">
            <ArrowUpCircle className="h-4 w-4 mr-2" />
            Enviadas
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Search + Dialog */}
      <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto md:items-center">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar transacción..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9 input-primary"
          />
        </div>
      </div>
    </div>
  );
}
