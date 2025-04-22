"use client"

import { useState } from "react"
import { CardItem } from "./CardItem"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { PlusCircle, CreditCard, Wallet, Gift } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface CardListProps {
  type: "all" | "credit" | "debit" | "prepaid"
}

export function CardList({ type }: CardListProps) {
  const [addCardOpen, setAddCardOpen] = useState(false)

  const cards = [
    {
      id: 1,
      name: "Denix Rivera",
      number: "4642 3489 9867 7632",
      validFrom: "11/21",
      expiry: "03/25",
      cvv: "521",
      type: "credit",
      backgroundUrl: "https://i.imgur.com/kGkSg1v.png",
      logoUrl: "https://i.imgur.com/bbPHJVe.png",
    },
    {
      id: 2,
      name: "Denix Rivera",
      number: "5599 4412 7766 2233",
      validFrom: "04/23",
      expiry: "04/28",
      cvv: "221",
      type: "debit",
      backgroundUrl: "https://i.imgur.com/Zi6v09P.png",
      logoUrl: "https://i.imgur.com/bbPHJVe.png",
    },
    {
      id: 3,
      name: "Angela Smith",
      number: "6011 5678 9012 3456",
      validFrom: "06/22",
      expiry: "06/26",
      cvv: "345",
      type: "credit",
      backgroundUrl: "https://i.imgur.com/kGkSg1v.png",
      logoUrl: "https://i.imgur.com/bbPHJVe.png",
      isAdditional: true,
    },
    {
      id: 4,
      name: "Denix Rivera",
      number: "9876 5432 1098 7654",
      validFrom: "01/24",
      expiry: "01/27",
      cvv: "789",
      type: "prepaid",
      backgroundUrl: "https://i.imgur.com/Zi6v09P.png",
      logoUrl: "https://i.imgur.com/bbPHJVe.png",
    },
  ]

  const filteredCards = type === "all" ? cards : cards.filter((card) => card.type === type)

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCards.map((card) => (
          <div key={card.id} className="flex flex-col gap-3">
            <CardItem {...card} />
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  {card.type === "credit" && <CreditCard className="h-4 w-4 text-primary" />}
                  {card.type === "debit" && <Wallet className="h-4 w-4 text-primary" />}
                  {card.type === "prepaid" && <Gift className="h-4 w-4 text-primary" />}
                  <span className="font-medium">
                    {card.type === "credit"
                      ? "Tarjeta de Crédito"
                      : card.type === "debit"
                        ? "Tarjeta de Débito"
                        : "Tarjeta Prepago"}
                  </span>
                </div>
                {card.isAdditional && <Badge className="mt-1 bg-blue-500 text-white self-start">Adicional</Badge>}
              </div>
              <Button variant="outline" size="sm" className="button-outline-auto">
                Administrar
              </Button>
            </div>
          </div>
        ))}

        <div className="flex flex-col items-center justify-center h-56 card border-2 border-dashed p-4">
          <Button variant="ghost" className="h-full w-full flex flex-col gap-3" onClick={() => setAddCardOpen(true)}>
            <PlusCircle className="h-10 w-10 text-primary" />
            <span className="font-medium">Solicitar nueva tarjeta</span>
          </Button>
        </div>
      </div>

      <Dialog open={addCardOpen} onOpenChange={setAddCardOpen}>
        <DialogContent className="popover">
          <DialogHeader>
            <DialogTitle>Solicitar nueva tarjeta</DialogTitle>
            <DialogDescription>Seleccione el tipo de tarjeta que desea solicitar</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-4 py-4">
            <Button variant="outline" className="button-outline-auto flex flex-col h-28 gap-3">
              <CreditCard className="h-6 w-6 text-primary" />
              <span>Crédito</span>
            </Button>
            <Button variant="outline" className="button-outline-auto flex flex-col h-28 gap-3">
              <Wallet className="h-6 w-6 text-primary" />
              <span>Débito</span>
            </Button>
            <Button variant="outline" className="button-outline-auto flex flex-col h-28 gap-3">
              <Gift className="h-6 w-6 text-primary" />
              <span>Prepago</span>
            </Button>
          </div>
          <DialogFooter>
            <Button variant="outline" className="button-outline-auto" onClick={() => setAddCardOpen(false)}>
              Cancelar
            </Button>
            <Button className="button-primary-auto">Continuar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
