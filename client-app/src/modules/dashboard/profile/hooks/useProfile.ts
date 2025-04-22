"use client"

import { useState, useEffect } from "react"
import type { User } from "../types/ProfileTypes"

export function useProfile() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUserProfile = async () => {
      setIsLoading(true)
      setError(null)

      try {
        // En un caso real, aquí harías una llamada a la API
        await new Promise((resolve) => setTimeout(resolve, 800))

        // Datos de ejemplo
        const userData: User = {
          id: "usr-123456",
          nombres: "Denix",
          apellidos: "Rivera",
          correo: "denix.rivera@example.com",
          telefono: "+56 9 1234 5678",
          documento_tipo: "RUT",
          documento_numero: "12.345.678-9",
          fecha_nacimiento: new Date(1990, 5, 15),
          fecha_registro: new Date(2020, 3, 10),
          categoria: "Premium",
          verificado: true,
          productos: 3,
          direcciones: [
            {
              id: 1,
              tipo_direccion: "residencial",
              calle: "Av. Providencia",
              numero: "1234",
              comuna: "Providencia",
              ciudad: "Santiago",
              region: "Metropolitana",
              codigo_postal: "7500000",
              pais: "Chile",
              activa: true,
            },
            {
              id: 2,
              tipo_direccion: "trabajo",
              calle: "Av. Apoquindo",
              numero: "5678",
              comuna: "Las Condes",
              ciudad: "Santiago",
              region: "Metropolitana",
              codigo_postal: "7550000",
              pais: "Chile",
              activa: false,
            },
          ],
        }

        setUser(userData)
      } catch (err) {
        setError("Error al cargar los datos del perfil")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserProfile()
  }, [])

  const updateUserProfile = async (updatedData: Partial<User>) => {
    if (!user) return false

    try {
      // En un caso real, aquí harías una llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Actualizar localmente
      setUser((prev) => (prev ? { ...prev, ...updatedData } : null))
      return true
    } catch (err) {
      setError("Error al actualizar los datos del perfil")
      console.error(err)
      return false
    }
  }

  return {
    user,
    isLoading,
    error,
    updateUserProfile,
  }
}
