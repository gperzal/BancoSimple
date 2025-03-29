// modules/dashboard/cards/components/CardOverview.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardItem } from "./CardItem";
import { cn } from "@/lib/utils";

interface CardOverviewProps extends React.HTMLAttributes<HTMLDivElement> {
  onSeeAll?: () => void;
}
export function CardOverview({
  className,
  onSeeAll,
  ...props
}: CardOverviewProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: 1,
      name: "Denix Rivera",
      number: "4642 3489 9867 7632",
      validFrom: "11/21",
      expiry: "03/25",
      cvv: "521",
      type: "credit",
      balance: 2450.75,
      limit: 5000,
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
      balance: 1250.5,
      backgroundUrl: "https://i.imgur.com/Zi6v09P.png",
      logoUrl: "https://i.imgur.com/bbPHJVe.png",
    },
  ];

  const activeCard = cards[activeIndex];

  return (
    <Card className={cn("col-span-4", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Tarjetas Principales</CardTitle>
        <Button variant="outline" size="sm" onClick={onSeeAll}>
          Ver todas
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-8">
          <div className="flex w-full justify-center">
            <CardItem {...activeCard} />
          </div>

          <div className="flex gap-2">
            {cards.map((card, index) => (
              <Button
                key={card.id}
                variant={index === activeIndex ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveIndex(index)}
                className="min-w-24"
              >
                {card.type === "credit" ? "Crédito" : "Débito"}
              </Button>
            ))}
          </div>

          <div className="w-full space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border p-3">
                <div className="text-sm font-medium text-muted-foreground">
                  {activeCard.type === "credit"
                    ? "Límite de crédito"
                    : "Saldo disponible"}
                </div>
                <div className="text-2xl font-bold">
                  $
                  {activeCard.type === "credit"
                    ? `$${(activeCard.limit ?? 0).toFixed(2)}`
                    : `$${activeCard.balance.toFixed(2)}`}
                </div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="text-sm font-medium text-muted-foreground">
                  {activeCard.type === "credit"
                    ? "Saldo utilizado"
                    : "Último movimiento"}
                </div>
                <div className="text-2xl font-bold">
                  $
                  {activeCard.type === "credit"
                    ? activeCard.balance.toFixed(2)
                    : "125.30"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
