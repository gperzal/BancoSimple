"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserPlus, CreditCard, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function CardHolders() {
  const [addHolderOpen, setAddHolderOpen] = useState(false)

  const holders = [
    {
      id: 1,
      name: "Denix Rivera",
      email: "tochi@example.com",
      role: "Titular Principal",
      cards: 3,
      image: "/placeholder.svg",
      isPrimary: true,
    },
    {
      id: 2,
      name: "Angela Smith",
      email: "angela.smith@example.com",
      role: "Titular Adicional",
      cards: 1,
      image: "/placeholder.svg",
      isPrimary: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {holders.map((holder) => (
          <Card key={holder.id} className="card hover:border-primary/50 hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar className="h-14 w-14 border-2 border-primary">
                <AvatarImage src={holder.image || "/placeholder.svg"} alt={holder.name} />
                <AvatarFallback className="bg-primary text-white text-lg font-bold">
                  {holder.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="flex items-center gap-2">
                  {holder.name}
                  {holder.isPrimary && (
                    <Badge className="bg-primary text-white">
                      <Shield className="h-3 w-3 mr-1" /> Principal
                    </Badge>
                  )}
                </CardTitle>
                <CardDescription>{holder.role}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Email:</span>
                  <span className="text-sm font-medium">{holder.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Tarjetas:</span>
                  <div className="flex items-center gap-1">
                    <CreditCard className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{holder.cards}</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="button-outline-auto w-full">
                Ver tarjetas
              </Button>
            </CardFooter>
          </Card>
        ))}

        <Card className="card border-2 border-dashed h-[250px] flex items-center justify-center">
          <Button variant="ghost" className="h-full w-full flex flex-col gap-3" onClick={() => setAddHolderOpen(true)}>
            <UserPlus className="h-10 w-10 text-primary" />
            <span className="font-medium">Agregar titular adicional</span>
          </Button>
        </Card>
      </div>

      <Dialog open={addHolderOpen} onOpenChange={setAddHolderOpen}>
        <DialogContent className="popover">
          <DialogHeader>
            <DialogTitle>Agregar titular adicional</DialogTitle>
            <DialogDescription>Ingrese los datos del nuevo titular adicional</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input id="name" placeholder="Nombre y apellidos" className="input-primary" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" placeholder="correo@ejemplo.com" className="input-primary" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="document">Documento de identidad</Label>
              <Input id="document" placeholder="Número de documento" className="input-primary" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" placeholder="Número de teléfono" className="input-primary" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" className="button-outline-auto" onClick={() => setAddHolderOpen(false)}>
              Cancelar
            </Button>
            <Button className="button-primary-auto">Agregar titular</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
