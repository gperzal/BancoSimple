"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import type { PaymentSettings as PaymentSettingsType } from "../types/SettingsTypes"

interface PaymentSettingsProps {
  settings: PaymentSettingsType
  onSettingChange: (key: keyof PaymentSettingsType, value: any) => void
  onLimitChange: (type: "daily" | "monthly", value: number) => void
  onAddCard: () => void
  onEditCard: (id: number) => void
  onSetDefaultCard: (id: number) => void
  disabled?: boolean
}

export function PaymentSettings({
  settings,
  onSettingChange,
  onLimitChange,
  onAddCard,
  onEditCard,
  onSetDefaultCard,
  disabled = false,
}: PaymentSettingsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Tarjetas registradas</h3>
        <p className="text-sm text-muted-foreground mb-4">Administra tus tarjetas registradas para pagos</p>

        <div className="space-y-4">
          <RadioGroup
            value={`card-${settings.savedCards.find((card) => card.isDefault)?.id || ""}`}
            onValueChange={(value) => {
              const cardId = Number.parseInt(value.replace("card-", ""))
              onSetDefaultCard(cardId)
            }}
            disabled={disabled}
          >
            {settings.savedCards.map((card) => (
              <Card key={card.id} className={card.isDefault ? "border-primary" : "border-border"}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <RadioGroupItem value={`card-${card.id}`} id={`card-${card.id}`} disabled={disabled} />
                      <CreditCard className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">
                          {card.type} •••• {card.last4}
                        </p>
                        <p className="text-sm text-muted-foreground">Expira {card.expiry}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {card.isDefault && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Predeterminada
                        </span>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="button-ghost-auto"
                        onClick={() => onEditCard(card.id)}
                        disabled={disabled}
                      >
                        Editar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </RadioGroup>

          <Button
            variant="outline"
            className="w-full button-outline-auto flex items-center justify-center gap-2"
            onClick={onAddCard}
            disabled={disabled}
          >
            <Plus className="h-4 w-4" />
            Añadir nueva tarjeta
          </Button>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium">Método de pago predeterminado</h3>
        <p className="text-sm text-muted-foreground mb-4">Selecciona cómo prefieres realizar tus pagos</p>

        <RadioGroup
          value={settings.defaultPaymentMethod}
          onValueChange={(value: any) => onSettingChange("defaultPaymentMethod", value)}
          disabled={disabled}
        >
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="account-balance" id="account-balance" disabled={disabled} />
            <Label htmlFor="account-balance" className={disabled ? "text-muted-foreground" : ""}>
              Saldo de la cuenta
            </Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="default-card" id="default-card" disabled={disabled} />
            <Label htmlFor="default-card" className={disabled ? "text-muted-foreground" : ""}>
              Tarjeta predeterminada
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="ask-each-time" id="ask-each-time" disabled={disabled} />
            <Label htmlFor="ask-each-time" className={disabled ? "text-muted-foreground" : ""}>
              Preguntar cada vez
            </Label>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium">Límites de transferencia</h3>
        <p className="text-sm text-muted-foreground mb-4">Configura límites de seguridad para tus transferencias</p>

        <div className="space-y-4">
          <div>
            <Label htmlFor="daily-limit" className={`mb-2 block ${disabled ? "text-muted-foreground" : ""}`}>
              Límite diario
            </Label>
            <div className="flex items-center">
              <span className="bg-muted px-3 py-2 border border-r-0 rounded-l-md">$</span>
              <Input
                type="number"
                id="daily-limit"
                className="input-primary rounded-l-none"
                placeholder="0.00"
                value={settings.limits.daily}
                onChange={(e) => onLimitChange("daily", Number.parseInt(e.target.value) || 0)}
                disabled={disabled}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="monthly-limit" className={`mb-2 block ${disabled ? "text-muted-foreground" : ""}`}>
              Límite mensual
            </Label>
            <div className="flex items-center">
              <span className="bg-muted px-3 py-2 border border-r-0 rounded-l-md">$</span>
              <Input
                type="number"
                id="monthly-limit"
                className="input-primary rounded-l-none"
                placeholder="0.00"
                value={settings.limits.monthly}
                onChange={(e) => onLimitChange("monthly", Number.parseInt(e.target.value) || 0)}
                disabled={disabled}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
