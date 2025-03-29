import { ArrowRightLeft } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="card flex flex-col items-center justify-center text-center py-12">
      <ArrowRightLeft className="h-12 w-12 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">
        Aún no tienes transacciones
      </h3>
      <p className="text-gray-500">
        Cuando realices tu primera transferencia, aparecerá aquí el detalle.
      </p>
    </div>
  );
}
