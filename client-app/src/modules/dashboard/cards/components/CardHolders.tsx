// modules/dashboard/cards/components/CardHolders.tsx

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus } from "lucide-react";

export function CardHolders() {
  const [addHolderOpen, setAddHolderOpen] = useState(false);

  const holders = [
    {
      id: 1,
      name: "Denix Rivera",
      email: "tochi@example.com",
      role: "Titular Principal",
      cards: 3,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Angela Smith",
      email: "angela.smith@example.com",
      role: "Titular Adicional",
      cards: 1,
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {holders.map((holder) => (
          <Card key={holder.id}>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={holder.image} alt={holder.name} />
                <AvatarFallback>{holder.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{holder.name}</CardTitle>
                <CardDescription>{holder.role}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Email:</span>
                  <span className="text-sm font-medium">{holder.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Tarjetas:
                  </span>
                  <span className="text-sm font-medium">{holder.cards}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Ver tarjetas
              </Button>
            </CardFooter>
          </Card>
        ))}

        <Card className="border-2 border-dashed">
          <CardHeader className="flex flex-row items-center gap-4">
            <Button
              variant="ghost"
              className="h-full w-full flex flex-col gap-2 p-6"
              onClick={() => setAddHolderOpen(true)}
            >
              <UserPlus className="h-8 w-8" />
              <span>Agregar titular adicional</span>
            </Button>
          </CardHeader>
        </Card>
      </div>

      <Dialog open={addHolderOpen} onOpenChange={setAddHolderOpen}>
        <DialogContent className="z-[60] bg-background text-foreground">
          <DialogHeader>
            <DialogTitle>Agregar titular adicional</DialogTitle>
            <DialogDescription>
              Ingrese los datos del nuevo titular adicional
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input id="name" placeholder="Nombre y apellidos" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" placeholder="correo@ejemplo.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="document">Documento de identidad</Label>
              <Input id="document" placeholder="Número de documento" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" placeholder="Número de teléfono" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddHolderOpen(false)}>
              Cancelar
            </Button>
            <Button>Agregar titular</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
