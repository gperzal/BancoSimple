// modules/dashboard/cards/components/CardList.tsx

import { useState } from "react";
import { CardItem } from "./CardItem";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";

interface CardListProps {
  type: "all" | "credit" | "debit" | "prepaid";
}

export function CardList({ type }: CardListProps) {
  const [addCardOpen, setAddCardOpen] = useState(false);

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
  ];

  const filteredCards =
    type === "all" ? cards : cards.filter((card) => card.type === type);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCards.map((card) => (
          <div key={card.id} className="flex flex-col gap-2">
            <CardItem {...card} />
            <div className="flex justify-between mt-2">
              <div>
                <span className="text-sm font-medium">
                  {card.type === "credit"
                    ? "Tarjeta de Crédito"
                    : card.type === "debit"
                    ? "Tarjeta de Débito"
                    : "Tarjeta Prepago"}
                </span>
                {card.isAdditional && (
                  <span className="text-xs text-muted-foreground block">
                    Adicional
                  </span>
                )}
              </div>
              <Button variant="ghost" size="sm">
                Administrar
              </Button>
            </div>
          </div>
        ))}

        <div className="flex flex-col items-center justify-center h-56 border-2 border-dashed rounded-xl p-4">
          <Button
            variant="ghost"
            className="h-full w-full flex flex-col gap-2"
            onClick={() => setAddCardOpen(true)}
          >
            <PlusCircle className="h-8 w-8" />
            <span>Solicitar nueva tarjeta</span>
          </Button>
        </div>
      </div>

      <Dialog open={addCardOpen} onOpenChange={setAddCardOpen}>
        <DialogContent className="z-[60] bg-background text-foreground">
          <DialogHeader>
            <DialogTitle>Solicitar nueva tarjeta</DialogTitle>
            <DialogDescription>
              Seleccione el tipo de tarjeta que desea solicitar
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-4 py-4">
            <Button variant="outline" className="flex flex-col h-24 gap-2">
              <span className="text-lg">💳</span>
              <span>Crédito</span>
            </Button>
            <Button variant="outline" className="flex flex-col h-24 gap-2">
              <span className="text-lg">💰</span>
              <span>Débito</span>
            </Button>
            <Button variant="outline" className="flex flex-col h-24 gap-2">
              <span className="text-lg">🎁</span>
              <span>Prepago</span>
            </Button>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddCardOpen(false)}>
              Cancelar
            </Button>
            <Button>Continuar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
