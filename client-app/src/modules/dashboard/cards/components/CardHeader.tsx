"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CardHeaderProps {
  onSeeAll?: () => void
}

export function CardHeader({ onSeeAll }: CardHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-primary/10 dark:bg-primary/20 rounded-xl p-4">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-primary mb-1">Mis Tarjetas</h1>
        <p className="text-muted-foreground">
          Administra tus tarjetas, revisa tus saldos y accede rápidamente a acciones comunes
        </p>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <Button className="button-primary-auto flex items-center gap-2" onClick={onSeeAll}>
          Ver todas mis tarjetas <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
