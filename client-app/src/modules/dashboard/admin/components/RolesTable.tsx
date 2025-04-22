"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { UserCog, Search, Filter, UserPlus, ShieldCheck, ShieldAlert, User, UserX, Check, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface RolesTableProps {
  searchQuery: string
  selectedRole: string
  onSearch: (query: string) => void
  onRoleFilter: (role: string) => void
}

export function RolesTable({ searchQuery, selectedRole, onSearch, onRoleFilter }: RolesTableProps) {
  const [editRolesOpen, setEditRolesOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [selectedRoles, setSelectedRoles] = useState<string[]>([])

  // Datos de ejemplo
  const usersData = [
    {
      id: 1,
      name: "Ana Martínez",
      email: "ana.martinez@example.com",
      roles: ["ADMIN", "EXECUTIVE"],
      status: "Activo",
      lastLogin: "Hoy, 10:45 AM",
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      email: "carlos.rodriguez@example.com",
      roles: ["EXECUTIVE"],
      status: "Activo",
      lastLogin: "Hoy, 09:30 AM",
    },
    {
      id: 3,
      name: "María López",
      email: "maria.lopez@example.com",
      roles: ["CLIENT", "PREMIUM"],
      status: "Inactivo",
      lastLogin: "Ayer, 15:20 PM",
    },
    {
      id: 4,
      name: "Juan Pérez",
      email: "juan.perez@example.com",
      roles: ["EXECUTIVE"],
      status: "Activo",
      lastLogin: "Hoy, 11:15 AM",
    },
    {
      id: 5,
      name: "Laura Sánchez",
      email: "laura.sanchez@example.com",
      roles: ["CLIENT"],
      status: "Bloqueado",
      lastLogin: "Hace 3 días",
    },
  ]

  // Roles disponibles en el sistema
  const availableRoles = [
    { id: "ADMIN", name: "Administrador", description: "Acceso completo al sistema" },
    { id: "EXECUTIVE", name: "Ejecutivo", description: "Gestión de clientes y operaciones" },
    { id: "CLIENT", name: "Cliente", description: "Acceso básico a la plataforma" },
    { id: "PREMIUM", name: "Cliente Premium", description: "Acceso a servicios exclusivos" },
  ]

  // Filtrar usuarios según la búsqueda y el rol seleccionado
  const filteredUsers = usersData.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesRole = selectedRole === "all" || user.roles.includes(selectedRole)

    return matchesSearch && matchesRole
  })

  // Abrir el diálogo de edición de roles
  const handleEditRoles = (user: any) => {
    setSelectedUser(user)
    setSelectedRoles([...user.roles])
    setEditRolesOpen(true)
  }

  // Manejar cambios en los roles seleccionados
  const handleRoleChange = (roleId: string, checked: boolean) => {
    if (checked) {
      setSelectedRoles((prev) => [...prev, roleId])
    } else {
      setSelectedRoles((prev) => prev.filter((r) => r !== roleId))
    }
  }

  // Guardar los cambios de roles
  const handleSaveRoles = () => {
    // Aquí iría la lógica para guardar los cambios en la API
    console.log(`Actualizando roles para ${selectedUser?.name}:`, selectedRoles)

    // Actualizar localmente para la demo
    const updatedUsers = usersData.map((user) => {
      if (user.id === selectedUser?.id) {
        return { ...user, roles: selectedRoles }
      }
      return user
    })

    // Cerrar el diálogo
    setEditRolesOpen(false)
  }

  // Renderizar el badge del rol con el color correspondiente
  const getRoleBadge = (role: string) => {
    switch (role) {
      case "ADMIN":
        return (
          <Badge className="bg-red-500 text-white flex items-center gap-1">
            <ShieldAlert className="h-3 w-3" /> Admin
          </Badge>
        )
      case "EXECUTIVE":
        return (
          <Badge className="bg-amber-500 text-white flex items-center gap-1">
            <UserCog className="h-3 w-3" /> Ejecutivo
          </Badge>
        )
      case "PREMIUM":
        return (
          <Badge className="bg-purple-500 text-white flex items-center gap-1">
            <ShieldCheck className="h-3 w-3" /> Premium
          </Badge>
        )
      case "CLIENT":
        return (
          <Badge className="bg-blue-500 text-white flex items-center gap-1">
            <User className="h-3 w-3" /> Cliente
          </Badge>
        )
      default:
        return (
          <Badge className="bg-gray-500 text-white flex items-center gap-1">
            <User className="h-3 w-3" /> {role}
          </Badge>
        )
    }
  }

  return (
    <Card className="border-primary/20">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <CardTitle className="text-xl font-semibold flex items-center">
            <UserCog className="h-5 w-5 mr-2 text-primary" /> Usuarios y Roles
          </CardTitle>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar usuarios..."
                className="input-primary pl-10"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
            <div className="w-[180px]">
              <Select value={selectedRole} onValueChange={onRoleFilter}>
                <SelectTrigger className="select-primary">
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filtrar por rol" />
                  </div>
                </SelectTrigger>
                <SelectContent className="popover">
                  <SelectItem value="all">Todos los roles</SelectItem>
                  <SelectItem value="ADMIN">Administrador</SelectItem>
                  <SelectItem value="EXECUTIVE">Ejecutivo</SelectItem>
                  <SelectItem value="CLIENT">Cliente</SelectItem>
                  <SelectItem value="PREMIUM">Cliente Premium</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
                <TableHead>Email</TableHead>
                <TableHead>Roles</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Último Acceso</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id} className="table-row-hover">
                  <TableCell className="table-cell font-medium">{user.name}</TableCell>
                  <TableCell className="table-cell text-muted-foreground">{user.email}</TableCell>
                  <TableCell className="table-cell">
                    <div className="flex flex-wrap gap-1">
                      {user.roles.map((role) => (
                        <div key={role}>{getRoleBadge(role)}</div>
                      ))}
                    </div>
                  </TableCell>
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
                      <Button
                        variant="outline"
                        size="sm"
                        className="button-outline-auto"
                        onClick={() => handleEditRoles(user)}
                      >
                        Editar Roles
                      </Button>
                      {user.status !== "Bloqueado" ? (
                        <Button variant="outline" size="sm" className="text-red-500 border-red-500">
                          <UserX className="h-4 w-4 mr-1" /> Bloquear
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="text-green-500 border-green-500">
                          <User className="h-4 w-4 mr-1" /> Activar
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      {/* Diálogo para editar roles */}
      <Dialog open={editRolesOpen} onOpenChange={setEditRolesOpen}>
        <DialogContent className="popover">
          <DialogHeader>
            <DialogTitle>Editar Roles de Usuario</DialogTitle>
            <DialogDescription>
              {selectedUser && (
                <span>
                  Modificar los roles asignados a <strong>{selectedUser.name}</strong>
                </span>
              )}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {availableRoles.map((role) => (
              <div key={role.id} className="flex items-start space-x-3 space-y-0">
                <Checkbox
                  id={`role-${role.id}`}
                  checked={selectedRoles.includes(role.id)}
                  onCheckedChange={(checked) => handleRoleChange(role.id, checked as boolean)}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor={`role-${role.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {role.name}
                  </Label>
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                </div>
              </div>
            ))}
          </div>

          <DialogFooter className="flex space-x-2 justify-end">
            <Button variant="outline" className="button-outline-auto" onClick={() => setEditRolesOpen(false)}>
              <X className="h-4 w-4 mr-1" /> Cancelar
            </Button>
            <Button className="button-primary-auto" onClick={handleSaveRoles}>
              <Check className="h-4 w-4 mr-1" /> Guardar Cambios
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  )
}
