// modules/dashboard/cards/components/QuickActions.tsx

import { Button } from "@/components/ui/button";
import { CreditCard, Lock, AlertTriangle, DollarSign } from "lucide-react";

export function QuickActions() {
  return (
    <div className="grid gap-4">
      <h3 className="text-lg font-semibold">Acciones rápidas</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <Button variant="outline" className="flex gap-2">
          <Lock size={18} /> Bloquear tarjeta
        </Button>
        <Button variant="outline" className="flex gap-2">
          <AlertTriangle size={18} /> Reportar problema
        </Button>
        <Button variant="outline" className="flex gap-2">
          <DollarSign size={18} /> Realizar pago
        </Button>
        <Button variant="outline" className="flex gap-2">
          <CreditCard size={18} /> Solicitar adicional
        </Button>
      </div>
    </div>
  );
}
