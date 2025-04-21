import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Phone, Mail, MessageSquare, User } from "lucide-react"
import { ClientInfoTab } from "./ClientInfoTab"
import { ClientAccountsTab } from "./ClientAccountsTab"
import { ClientTransactionsTab } from "./ClientTransactionsTab"
import { ClientCasesTab } from "./ClientCasesTab"

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

interface ClientDetailsCardProps {
  client: Client | null
}

export function ClientDetailsCard({ client }: ClientDetailsCardProps) {
  if (!client) {
    return (
      <Card className="border-primary/20 lg:col-span-2">
        <div className="flex flex-col items-center justify-center p-12 text-center">
          <User className="h-16 w-16 text-muted-foreground/50 mb-4" />
          <h3 className="text-lg font-medium mb-2">Ningún cliente seleccionado</h3>
          <p className="text-muted-foreground max-w-md">
            Seleccione un cliente de la lista para ver sus detalles y gestionar su información.
          </p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="border-primary/20 lg:col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-primary/20 text-primary text-lg">
                {client.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl">{client.name}</CardTitle>
              <CardDescription>
                Cliente {client.accountType} • ID: {client.id}
              </CardDescription>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
              <Mail className="h-4 w-4" />
            </Button>
            <Button className="button-primary-auto">
              <MessageSquare className="h-4 w-4 mr-1" /> Iniciar Chat
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="info">
          <TabsList className="flex mb-6 space-x-2 overflow-x-auto">
            <TabsTrigger value="info" className="tabs-trigger-primary">
              Información
            </TabsTrigger>
            <TabsTrigger value="accounts" className="tabs-trigger-primary">
              Cuentas
            </TabsTrigger>
            <TabsTrigger value="transactions" className="tabs-trigger-primary">
              Transacciones
            </TabsTrigger>
            <TabsTrigger value="cases" className="tabs-trigger-primary">
              Casos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="info">
            <ClientInfoTab client={client} />
          </TabsContent>

          <TabsContent value="accounts">
            <ClientAccountsTab />
          </TabsContent>

          <TabsContent value="transactions">
            <ClientTransactionsTab />
          </TabsContent>

          <TabsContent value="cases">
            <ClientCasesTab client={client} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
