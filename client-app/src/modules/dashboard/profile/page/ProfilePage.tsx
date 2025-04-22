"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileHeader } from "../components/ProfileHeader"
import { PersonalDataForm } from "../components/PersonalDataForm"
import { AddressForm } from "../components/AddressForm"
import { SecurityForm } from "../components/SecurityForm"
import { useProfile } from "../hooks/useProfile"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal")
  const { user, isLoading, error, updateUserProfile } = useProfile()

  if (isLoading) {
    return <ProfileSkeleton />
  }

  if (error || !user) {
    return (
      <div className="container mx-auto py-6">
        <div className="bg-destructive/10 border border-destructive/30 text-destructive rounded-lg p-4">
          <h2 className="text-lg font-semibold">Error al cargar el perfil</h2>
          <p>{error || "No se pudo cargar la información del perfil"}</p>
        </div>
      </div>
    )
  }

  return (
    <section className="container mx-auto space-y-6 py-4 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-primary/10 dark:bg-primary/20 rounded-xl p-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-primary mb-1">Mi Perfil</h1>
          <p className="text-muted-foreground">Administra tus datos personales, direcciones y seguridad</p>
        </div>
      </div>

      <ProfileHeader user={user} />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-transparent border border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] p-1 rounded-xl">
          <TabsTrigger value="personal" className="tabs-trigger-primary">
            Datos Personales
          </TabsTrigger>
          <TabsTrigger value="direcciones" className="tabs-trigger-primary">
            Direcciones
          </TabsTrigger>
          <TabsTrigger value="seguridad" className="tabs-trigger-primary">
            Seguridad
          </TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="mt-6">
          <PersonalDataForm userData={user} onUpdate={updateUserProfile} />
        </TabsContent>

        <TabsContent value="direcciones" className="mt-6">
          <AddressForm addresses={user.direcciones} />
        </TabsContent>

        <TabsContent value="seguridad" className="mt-6">
          <SecurityForm />
        </TabsContent>
      </Tabs>
    </section>
  )
}

function ProfileSkeleton() {
  return (
    <section className="container mx-auto space-y-6 py-4">
      <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-6">
        <Skeleton className="h-8 w-64 mb-2" />
        <Skeleton className="h-4 w-96" />
      </div>

      <div className="border rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Skeleton className="h-20 w-20 rounded-full" />
          <div className="flex-1">
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-64 mb-2" />
            <Skeleton className="h-4 w-40 mb-4" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-28" />
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-1">
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>

      <div className="border rounded-lg p-6">
        <Skeleton className="h-6 w-48 mb-6" />
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
