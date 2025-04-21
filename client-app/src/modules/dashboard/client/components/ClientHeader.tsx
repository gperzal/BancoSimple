"use client"

import { Button } from "@/components/ui/button"
import { Crown, Headphones, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/modules/auth/hooks/useAuth";

export function ClientHeader() {
  const { auth } = useAuth()

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-primary/10 dark:bg-primary/20 rounded-xl p-4 sm:p-6 animate-fade-in">
      <div>
        <div className="flex items-center gap-2 flex-wrap">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
            Bienvenido, {auth?.fullName}
          </h1>
          <Badge className="bg-amber-500 text-white border-0 flex items-center gap-1 h-6">
            <Crown className="h-3 w-3" /> Premium
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mt-1">Disfruta de tus beneficios exclusivos</p>
      </div>
      <div className="flex mt-4 sm:mt-0 gap-2 flex-wrap">
        <Button variant="outline" size="sm" className="button-outline-auto h-9">
          <Headphones className="w-4 h-4 mr-1" /> Asistencia VIP
        </Button>
        <Button variant="default" size="sm" className="button-primary-auto h-9">
          <Calendar className="w-4 h-4 mr-1" /> Agendar Asesoría
        </Button>
      </div>
    </div>
  )
}
