"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, Shield, Globe, Palette, CreditCard } from "lucide-react"
import { AppearanceSettings } from "../components/AppearanceSettings"
import { NotificationSettings } from "../components/NotificationSettings"
import { SecuritySettings } from "../components/SecuritySettings"
import { LanguageSettings } from "../components/LanguageSettings"
import { PaymentSettings } from "../components/PaymentSettings"
import { useSettings } from "../hooks/useSettings"
import { Skeleton } from "@/components/ui/skeleton"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("appearance")
  const {
    settings,
    isLoading,
    isSaving,
    error,
    updateAppearanceSettings,
    updateNotificationSettings,
    updateSecuritySettings,
    updateLanguageSettings,
    updatePaymentSettings,
    saveAllSettings,
  } = useSettings()

  const handleAppearanceChange = (key: string, value: any) => {
    updateAppearanceSettings({ [key]: value })
  }

  const handleNotificationChange = (category: string, key: string, value: boolean) => {
    updateNotificationSettings({
      [category]: {
        ...settings?.notifications[category as keyof typeof settings.notifications],
        [key]: value,
      },
    })
  }

  const handleSecurityChange = (key: string, value: any) => {
    updateSecuritySettings({ [key]: value })
  }

  const handleLanguageChange = (key: string, value: any) => {
    updateLanguageSettings({ [key]: value })
  }

  const handlePaymentChange = (key: string, value: any) => {
    updatePaymentSettings({ [key]: value })
  }

  const handleLimitChange = (type: "daily" | "monthly", value: number) => {
    if (!settings) return

    updatePaymentSettings({
      limits: {
        ...settings.payment.limits,
        [type]: value,
      },
    })
  }

  const handleAddCard = () => {
    // Implementar lógica para añadir tarjeta
    console.log("Añadir tarjeta")
  }

  const handleEditCard = (id: number) => {
    // Implementar lógica para editar tarjeta
    console.log("Editar tarjeta", id)
  }

  const handleSetDefaultCard = (id: number) => {
    if (!settings) return

    const updatedCards = settings.payment.savedCards.map((card) => ({
      ...card,
      isDefault: card.id === id,
    }))

    updatePaymentSettings({
      savedCards: updatedCards,
    })
  }

  if (isLoading) {
    return <SettingsSkeleton />
  }

  if (error || !settings) {
    return (
      <div className="container mx-auto py-6">
        <div className="bg-destructive/10 border border-destructive/30 text-destructive rounded-lg p-4">
          <h2 className="text-lg font-semibold">Error al cargar la configuración</h2>
          <p>{error || "No se pudo cargar la información de configuración"}</p>
        </div>
      </div>
    )
  }

  return (
    <section className="container mx-auto space-y-6 py-4 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-primary/10 dark:bg-primary/20 rounded-xl p-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-primary mb-1">Mi Configuración</h1>
          <p className="text-muted-foreground">Configura tu cuenta de Banco Simple según tus preferencias</p>
        </div>
      </div>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>Configuración de la Cuenta</CardTitle>
          <CardDescription>Personaliza tu experiencia en Banco Simple</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="appearance" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-transparent border border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] p-1 rounded-xl">
              <TabsTrigger value="appearance" className="tabs-trigger-primary flex items-center gap-2">
                <Palette className="h-4 w-4" />
                <span className="hidden md:inline">Apariencia</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="tabs-trigger-primary flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span className="hidden md:inline">Notificaciones</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="tabs-trigger-primary flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden md:inline">Seguridad</span>
              </TabsTrigger>
              <TabsTrigger value="language" className="tabs-trigger-primary flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span className="hidden md:inline">Idioma</span>
              </TabsTrigger>
              <TabsTrigger value="payment" className="tabs-trigger-primary flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span className="hidden md:inline">Métodos de Pago</span>
              </TabsTrigger>
            </TabsList>

            <div className="mt-6">
              <TabsContent value="appearance">
                <AppearanceSettings
                  settings={settings.appearance}
                  onSettingChange={handleAppearanceChange}
                  disabled={isSaving}
                />
              </TabsContent>

              <TabsContent value="notifications">
                <NotificationSettings
                  settings={settings.notifications}
                  onSettingChange={handleNotificationChange}
                  disabled={isSaving}
                />
              </TabsContent>

              <TabsContent value="security">
                <SecuritySettings
                  settings={settings.security}
                  onSettingChange={handleSecurityChange}
                  disabled={isSaving}
                />
              </TabsContent>

              <TabsContent value="language">
                <LanguageSettings
                  settings={settings.language}
                  onSettingChange={handleLanguageChange}
                  disabled={isSaving}
                />
              </TabsContent>

              <TabsContent value="payment">
                <PaymentSettings
                  settings={settings.payment}
                  onSettingChange={handlePaymentChange}
                  onLimitChange={handleLimitChange}
                  onAddCard={handleAddCard}
                  onEditCard={handleEditCard}
                  onSetDefaultCard={handleSetDefaultCard}
                  disabled={isSaving}
                />
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={saveAllSettings} className="button-primary-auto" disabled={isSaving}>
            {isSaving ? "Guardando..." : "Guardar Cambios"}
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}

function SettingsSkeleton() {
  return (
    <section className="container mx-auto space-y-6 py-4">
      <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-6">
        <Skeleton className="h-8 w-64 mb-2" />
        <Skeleton className="h-4 w-96" />
      </div>

      <div className="border rounded-lg p-6">
        <Skeleton className="h-6 w-48 mb-2" />
        <Skeleton className="h-4 w-64 mb-6" />

        <Skeleton className="h-10 w-full rounded-lg mb-8" />

        <div className="space-y-6">
          <div>
            <Skeleton className="h-6 w-32 mb-2" />
            <Skeleton className="h-4 w-96 mb-4" />

            <div className="space-y-2">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
            </div>
          </div>

          <Skeleton className="h-1 w-full" />

          <div>
            <Skeleton className="h-6 w-32 mb-2" />
            <Skeleton className="h-4 w-96 mb-4" />

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <Skeleton className="h-5 w-32 mb-1" />
                  <Skeleton className="h-4 w-64" />
                </div>
                <Skeleton className="h-6 w-12 rounded-full" />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <Skeleton className="h-5 w-32 mb-1" />
                  <Skeleton className="h-4 w-64" />
                </div>
                <Skeleton className="h-6 w-12 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </section>
  )
}
