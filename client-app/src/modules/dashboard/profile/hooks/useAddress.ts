"use client"

import { useState } from "react"
import type { Address } from "../types/ProfileTypes"
import { toast } from "sonner"

export function useAddress(initialAddresses: Address[]) {
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses)
  const [isEditing, setIsEditing] = useState<number | null>(null)
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleAddressChange = (id: number, field: keyof Address, value: string) => {
    setAddresses((prev) => prev.map((addr) => (addr.id === id ? { ...addr, [field]: value } : addr)))
  }

  const saveAddress = async (): Promise<boolean> => {
    setIsLoading(true)

    try {
      // En un caso real, aquí harías una llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 800))

      toast.success("Dirección actualizada correctamente")
      setIsEditing(null)
      return true
    } catch (error) {
      toast.error("Error al guardar la dirección")
      console.error(error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const addAddress = async (newAddress: Omit<Address, "id" | "activa">) => {
    if (!newAddress.calle || !newAddress.numero || !newAddress.comuna || !newAddress.ciudad) {
      toast.error("Por favor completa todos los campos obligatorios")
      return false
    }

    setIsLoading(true)

    try {
      // En un caso real, aquí harías una llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 800))

      const newId = Math.max(0, ...addresses.map((a) => a.id)) + 1
      const addressToAdd = {
        ...newAddress,
        id: newId,
        activa: false,
      } as Address

      setAddresses((prev) => [...prev, addressToAdd])
      toast.success("La nueva dirección ha sido agregada correctamente")
      setIsAddingNew(false)
      return true
    } catch (error) {
      toast.error("Error al agregar la dirección")
      console.error(error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const deleteAddress = async (id: number) => {
    setIsLoading(true)

    try {
      // En un caso real, aquí harías una llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 800))

      setAddresses((prev) => prev.filter((addr) => addr.id !== id))
      toast.success("La dirección ha sido eliminada correctamente")
      return true
    } catch (error) {
      toast.error("Error al eliminar la dirección")
      console.error(error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const setAddressAsPrimary = async (id: number) => {
    setIsLoading(true)

    try {
      // En un caso real, aquí harías una llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 800))

      setAddresses((prev) =>
        prev.map((addr) => ({
          ...addr,
          activa: addr.id === id,
        })),
      )
      toast.success("Dirección principal actualizada correctamente")
      return true
    } catch (error) {
      toast.error("Error al actualizar la dirección principal")
      console.error(error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return {
    addresses,
    isEditing,
    isAddingNew,
    isLoading,
    setIsEditing,
    setIsAddingNew,
    handleAddressChange,
    saveAddress,
    addAddress,
    deleteAddress,
    setAddressAsPrimary,
  }
}
