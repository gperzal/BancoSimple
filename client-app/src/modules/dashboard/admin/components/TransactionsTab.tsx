import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Search, Filter, Download, ArrowUpRight, ArrowDownLeft } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"

export function TransactionsTab() {
  const transactionsData = [
    {
      id: "TX-78945",
      client: "Ana Martínez",
      type: "Transferencia",
      amount: "$1,500.00",
      status: "Completada",
      date: "Hoy, 10:45 AM",
      isIncoming: false,
    },
    {
      id: "TX-78946",
      client: "Carlos Rodríguez",
      type: "Depósito",
      amount: "$2,300.00",
      status: "Completada",
      date: "Hoy, 09:30 AM",
      isIncoming: true,
    },
    {
      id: "TX-78947",
      client: "María López",
      type: "Retiro",
      amount: "$500.00",
      status: "Pendiente",
      date: "Hoy, 11:20 AM",
      isIncoming: false,
    },
    {
      id: "TX-78948",
      client: "Juan Pérez",
      type: "Transferencia",
      amount: "$3,200.00",
      status: "Rechazada",
      date: "Hoy, 11:15 AM",
      isIncoming: false,
    },
    {
      id: "TX-78949",
      client: "Laura Sánchez",
      type: "Pago",
      amount: "$750.00",
      status: "Completada",
      date: "Hoy, 12:05 PM",
      isIncoming: true,
    },
  ]

  return (
    <Card className="border-primary/20">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <CardTitle className="text-xl font-semibold flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-primary" /> Monitoreo de Transacciones
          </CardTitle>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar transacciones..." className="input-primary pl-10" />
            </div>
            <Button variant="outline" size="icon" className="h-10 w-10">
              <Filter className="h-4 w-4" />
            </Button>
            <Button className="button-primary-auto">
              <Download className="h-4 w-4 mr-1" /> Exportar
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="card overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="table-header">
                <TableHead>ID</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead className="text-right">Monto</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactionsData.map((tx, index) => (
                <TableRow key={index} className="table-row-hover">
                  <TableCell className="table-cell font-mono text-xs text-muted-foreground">{tx.id}</TableCell>
                  <TableCell className="table-cell font-medium">{tx.client}</TableCell>
                  <TableCell className="table-cell text-muted-foreground">{tx.type}</TableCell>
                  <TableCell className="table-cell">
                    <Badge
                      className={`${
                        tx.status === "Completada"
                          ? "bg-green-500"
                          : tx.status === "Pendiente"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      } text-white`}
                    >
                      {tx.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="table-cell text-muted-foreground">{tx.date}</TableCell>
                  <TableCell className="table-cell text-right">
                    <span
                      className={cn(
                        "flex items-center justify-end font-semibold",
                        tx.isIncoming ? "text-green-600" : "text-red-500",
                      )}
                    >
                      {tx.isIncoming ? (
                        <ArrowDownLeft className="h-4 w-4 mr-1" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                      )}
                      {tx.amount}
                    </span>
                  </TableCell>
                  <TableCell className="table-cell">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Detalles
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-500 border-red-500">
                        Revertir
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
