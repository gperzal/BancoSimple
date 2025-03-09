import { Button } from "@shadcn/button";
import { Link } from "react-router-dom";
import { Send, Plus } from "lucide-react";
import BalanceCard from "@/modules/dashboard/components/BalanceCard";
import RecentTransactions from "@/modules/dashboard/components/RecentTransactions";
import TransactionChart from "@/modules/dashboard/components/TransactionChart";
import { useAuth } from "@/context/AuthContext";

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          ¡Hola, {user?.name?.split(" ")[0] || "Usuario"}!
        </h2>
        <div className="flex flex-wrap gap-2">
          <Button asChild>
            <Link to="/transactions" className="flex items-center">
              <Send className="mr-2 h-5 w-5" />
              Enviar Dinero
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/add-funds" className="flex items-center">
              <Plus className="mr-2 h-5 w-5" />
              Agregar Fondos
            </Link>
          </Button>
        </div>
      </div>

      {/* Grid de tarjetas */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <BalanceCard />
        <TransactionChart />
      </div>

      {/* Transacciones Recientes */}
      <RecentTransactions />
    </div>
  );
};

export default DashboardPage;
