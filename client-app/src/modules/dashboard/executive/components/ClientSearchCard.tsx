"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, PlusCircle, User } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Client {
  id: string
  name: string
  email: string
  phone: string
  status: string
  lastContact: string
  accountType: string
  pendingIssues: number
}

interface ClientSearchCardProps {
  clients: Client[]
  selectedClient: string | null
  onClientSelect: (clientId: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function ClientSearchCard({
  clients,
  selectedClient,
  onClientSelect,
  searchQuery,
  onSearchChange,
}: ClientSearchCardProps) {
  // Filter clients based on search query
  const filteredClients = searchQuery
    ? clients.filter(
        (client) =>
          client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          client.phone.includes(searchQuery),
      )
    : clients

  return (
    <Card className="border-primary/20 lg:col-span-1">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <Search className="h-5 w-5 mr-2 text-primary" /> Buscar Cliente
        </CardTitle>
        <CardDescription>Busque por nombre, email o teléfono</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar cliente..."
            className="input-primary pl-10"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{filteredClients.length} clientes encontrados</span>
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <Filter className="h-3 w-3" /> Filtros
          </Button>
        </div>

        <div className="space-y-2 max-h-[400px] overflow-y-auto">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                selectedClient === client.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
              }`}
              onClick={() => onClientSelect(client.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/20 text-primary">
                      {client.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{client.name}</p>
                    <p className="text-xs text-muted-foreground">{client.email}</p>
                  </div>
                </div>
                <Badge
                  className={`${
                    client.status === "Activo"
                      ? "bg-green-500"
                      : client.status === "Inactivo"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  } text-white`}
                >
                  {client.status}
                </Badge>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Último contacto: {client.lastContact}</span>
                {client.pendingIssues > 0 && (
                  <Badge className="bg-yellow-500 text-white">{client.pendingIssues} pendiente(s)</Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between">
        <Button variant="outline" className="button-outline-auto">
          <PlusCircle className="h-4 w-4 mr-1" /> Nuevo Cliente
        </Button>
        <Button className="button-primary-auto">
          <User className="h-4 w-4 mr-1" /> Ver Todos
        </Button>
      </CardFooter>
    </Card>
  )
}
