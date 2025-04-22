"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CardList } from "./CardList"
import { CardHolders } from "./CardHolders"
import { ArrowLeft, CreditCard, Wallet, Gift, Users } from "lucide-react"

interface CardTabsProps {
  onBack?: () => void
}

export function CardTabs({ onBack }: CardTabsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        {onBack && (
          <Button variant="ghost" className="button-ghost-auto flex items-center gap-2" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" /> Volver
          </Button>
        )}
        <h1 className="text-3xl font-extrabold tracking-tight text-primary">Todas mis tarjetas</h1>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-transparent border border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] p-1 rounded-xl">
          <TabsTrigger value="all" className="tabs-trigger-primary">
            <CreditCard className="h-4 w-4 mr-2" />
            Todas
          </TabsTrigger>
          <TabsTrigger value="credit" className="tabs-trigger-primary">
            <CreditCard className="h-4 w-4 mr-2" />
            Crédito
          </TabsTrigger>
          <TabsTrigger value="debit" className="tabs-trigger-primary">
            <Wallet className="h-4 w-4 mr-2" />
            Débito
          </TabsTrigger>
          <TabsTrigger value="prepaid" className="tabs-trigger-primary">
            <Gift className="h-4 w-4 mr-2" />
            Prepago
          </TabsTrigger>
          <TabsTrigger value="holders" className="tabs-trigger-primary">
            <Users className="h-4 w-4 mr-2" />
            Titulares
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <CardList type="all" />
        </TabsContent>
        <TabsContent value="credit" className="mt-6">
          <CardList type="credit" />
        </TabsContent>
        <TabsContent value="debit" className="mt-6">
          <CardList type="debit" />
        </TabsContent>
        <TabsContent value="prepaid" className="mt-6">
          <CardList type="prepaid" />
        </TabsContent>
        <TabsContent value="holders" className="mt-6">
          <CardHolders />
        </TabsContent>
      </Tabs>
    </div>
  )
}
