"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, CreditCard, CheckCircle } from "lucide-react"
import type { User } from "../types/ProfileTypes"

interface ProfileHeaderProps {
  user: User
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  const initials = `${user.nombres.charAt(0)}${user.apellidos.charAt(0)}`

  return (
    <Card className="border-primary/20">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Avatar className="h-20 w-20 border-4 border-primary/10">
            <AvatarImage src="/placeholder.svg" alt={`${user.nombres} ${user.apellidos}`} />
            <AvatarFallback className="text-xl bg-primary/10 text-primary">{initials}</AvatarFallback>
          </Avatar>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold">
              {user.nombres} {user.apellidos}
            </h2>
            <p className="text-muted-foreground">{user.correo}</p>
            <p className="text-muted-foreground">{user.telefono}</p>

            <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
              {user.verificado && (
                <Badge variant="outline" className="flex items-center gap-1 badge-outline-primary">
                  <CheckCircle className="h-3 w-3" />
                  Verificado
                </Badge>
              )}
              <Badge variant="outline" className="flex items-center gap-1 badge-outline-primary">
                <CalendarIcon className="h-3 w-3" />
                Cliente desde {user.fecha_registro.getFullYear()}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 badge-outline-primary">
                <CreditCard className="h-3 w-3" />
                {user.productos} Productos
              </Badge>
            </div>
          </div>

          <div className="flex-shrink-0 hidden md:block">
            <div className="bg-primary/5 p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">Categoría</p>
              <p className="text-lg font-semibold text-primary">Cliente {user.categoria}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
