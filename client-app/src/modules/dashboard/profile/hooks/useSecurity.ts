"use client"

import type React from "react"

import { useState, useEffect } from "react"
import type { SecurityEvent, SecuritySettings } from "../types/ProfileTypes"
import { toast } from "sonner"

export function useSecurity() {
  const [securitySettings, setSecuritySettings] = useState<SecuritySettings>({
    twoFactorAuth: false,
    sessionNotifications: true,
    biometricLogin: false,
    lastPasswordChange: "2025-03-25 10:15",
  })

  const [securityEvents, setSecurityEvents] = useState<SecurityEvent[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  })

  useEffect(() => {
    const fetchSecurityData = async () => {
      setIsLoading(true)

      try {
        // En un caso real, aquí harías una llamada a la API
        await new Promise((resolve) => setTimeout(resolve, 800))

        // Datos de ejemplo
        const events: SecurityEvent[] = [
          {
            type: "login",
            device: "iPhone 15 Pro",
            location: "Santiago, Chile",
            date: "2025-04-07 14:30",
          },
          {
            type: "password_change",
            device: "MacBook Pro",
            location: "Santiago, Chile",
            date: "2025-03-25 10:15",
          },
          {
            type: "login",
            device: "Samsung Galaxy S23",
            location: "Viña del Mar, Chile",
            date: "2025-03-20 17:45",
          },
        ]

        setSecurityEvents(events)
      } catch (error) {
        console.error(error)
        toast.error("Error al cargar los datos de seguridad")
      } finally {
        setIsLoading(false)
      }
    }

    fetchSecurityData()
  }, [])

  const handlePasswordChange = (field: keyof typeof passwords) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPasswords((prev) => ({ ...prev, [field]: value }))

    if (field === "new") {
      let strength = 0
      if (value.length >= 8) strength += 1
      if (/[A-Z]/.test(value)) strength += 1
      if (/[0-9]/.test(value)) strength += 1
      if (/[^A-Za-z0-9]/.test(value)) strength += 1
      setPasswordStrength(strength)
    }
  }

  const updatePassword = async () => {
    if (passwords.new !== passwords.confirm) {
      toast.error("Las contraseñas nuevas no coinciden")
      return false
    }

    if (passwordStrength < 3) {
      toast.error("Por favor, crea una contraseña más segura")
      return false
    }

    setIsLoading(true)

    try {
      // En un caso real, aquí harías una llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Actualizar fecha de último cambio
      setSecuritySettings((prev) => ({
        ...prev,
        lastPasswordChange: new Date().toLocaleString(),
      }))

      toast.success("Tu contraseña ha sido actualizada correctamente")
      setIsChangingPassword(false)
      setPasswords({ current: "", new: "", confirm: "" })
      return true
    } catch (error) {
      toast.error("Error al actualizar la contraseña")
      console.error(error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const updateSecuritySetting = async (
    setting: "twoFactorAuth" | "sessionNotifications" | "biometricLogin",
    value: boolean) => {
    setIsLoading(true)

    try {
      // En un caso real, aquí harías una llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 800))

      setSecuritySettings((prev) => ({
        ...prev,
        [setting]: value,
      }))

      const settingName = {
        twoFactorAuth: "autenticación de dos factores",
        sessionNotifications: "notificaciones de sesión",
        biometricLogin: "inicio de sesión biométrico",
      }[setting]

      toast.success(`Se ha ${value ? "activado" : "desactivado"} ${settingName}`)
      return true
    } catch (error) {
      toast.error(`Error al actualizar la configuración de seguridad`)
      console.error(error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return {
    securitySettings,
    securityEvents,
    isLoading,
    isChangingPassword,
    passwordStrength,
    passwords,
    setIsChangingPassword,
    handlePasswordChange,
    updatePassword,
    updateSecuritySetting,
  }
}
