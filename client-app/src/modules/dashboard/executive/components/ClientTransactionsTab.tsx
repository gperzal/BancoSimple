import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter, History, ChevronRight } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function ClientTransactionsTab() {
  const transactions = [
    {
      date: "15/04/2023",
      description: "Transferencia a Juan Pérez",
      amount: "-$500.00",
      status: "Completada",
    },
    {
      date: "12/04/2023",
      description: "Depósito en Cajero",
      amount: "+$1,200.00",
      status: "Completada",
    },
    {
      date: "10/04/2023",
      description: "Pago de Servicios - Electricidad",
      amount: "-$120.50",
      status: "Completada",
    },
    {
      date: "05/04/2023",
      description: "Retiro en Cajero",
      amount: "-$300.00",
      status: "Completada",
    },
    {
      date: "01/04/2023",
      description: "Pago de Nómina",
      amount: "+$3,500.00",
      status: "Completada",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Transacciones Recientes</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-3 w-3 mr-1" /> Filtrar
          </Button>
          <Button variant="outline" size="sm">
            <History className="h-3 w-3 mr-1" /> Ver Historial
          </Button>
        </div>
      </div>

      <div className="card overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="table-header">
              <TableHead>Fecha</TableHead>
              <TableHead>Descripción</TableHead>
              <TableHead>Monto</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx, index) => (
              <TableRow key={index} className="table-row-hover">
                <TableCell className="table-cell text-muted-foreground">{tx.date}</TableCell>
                <TableCell className="table-cell font-medium">{tx.description}</TableCell>
                <TableCell
                  className={`table-cell font-medium ${tx.amount.startsWith("+") ? "text-green-600" : "text-red-500"}`}
                >
                  {tx.amount}
                </TableCell>
                <TableCell className="table-cell">
                  <Badge className="bg-green-500 text-white">{tx.status}</Badge>
                </TableCell>
                <TableCell className="table-cell text-right">
                  <Button variant="ghost" size="sm">
                    Detalles <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
