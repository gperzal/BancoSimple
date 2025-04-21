import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Users, Search, Filter, UserPlus } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function UsersTab() {
  const usersData = [
    {
      name: "Ana Martínez",
      role: "Administrador",
      status: "Activo",
      lastLogin: "Hoy, 10:45 AM",
    },
    {
      name: "Carlos Rodríguez",
      role: "Ejecutivo",
      status: "Activo",
      lastLogin: "Hoy, 09:30 AM",
    },
    {
      name: "María López",
      role: "Cliente",
      status: "Inactivo",
      lastLogin: "Ayer, 15:20 PM",
    },
    {
      name: "Juan Pérez",
      role: "Ejecutivo",
      status: "Activo",
      lastLogin: "Hoy, 11:15 AM",
    },
    {
      name: "Laura Sánchez",
      role: "Cliente",
      status: "Bloqueado",
      lastLogin: "Hace 3 días",
    },
  ]

  return (
    <Card className="border-primary/20">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <CardTitle className="text-xl font-semibold flex items-center">
            <Users className="h-5 w-5 mr-2 text-primary" /> Gestión de Usuarios
          </CardTitle>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar usuarios..." className="input-primary pl-10" />
            </div>
            <Button variant="outline" size="icon" className="h-10 w-10">
              <Filter className="h-4 w-4" />
            </Button>
            <Button className="button-primary-auto">
              <UserPlus className="h-4 w-4 mr-1" /> Nuevo Usuario
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="card overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="table-header">
                <TableHead>Usuario</TableHead>
                <TableHead>Rol</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Último Acceso</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usersData.map((user, index) => (
                <TableRow key={index} className="table-row-hover">
                  <TableCell className="table-cell font-medium">{user.name}</TableCell>
                  <TableCell className="table-cell text-muted-foreground">{user.role}</TableCell>
                  <TableCell className="table-cell">
                    <Badge
                      className={`${
                        user.status === "Activo"
                          ? "bg-green-500"
                          : user.status === "Inactivo"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      } text-white`}
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="table-cell text-muted-foreground">{user.lastLogin}</TableCell>
                  <TableCell className="table-cell">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Editar
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-500 border-red-500">
                        Bloquear
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
