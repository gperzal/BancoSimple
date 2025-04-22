"use client"

import { useState, useEffect } from "react"
import { toast } from "sonner"
import type {
  UserSettings,
  AppearanceSettings,
  NotificationSettings,
  SecuritySettings,
  LanguageSettings,
  PaymentSettings,
} from "../types/SettingsTypes"

export function useSettings() {
  const [settings, setSettings] = useState<UserSettings | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSettings = async () => {
      setIsLoading(true)
      setError(null)

      try {
        // En un caso real, aquí harías una llamada a la API
        await new Promise((resolve) => setTimeout(resolve, 800))

        // Datos de ejemplo
        const userSettings: UserSettings = {
          appearance: {
            theme: "system",
            animations: true,
            compactMode: false,
            showIcons: true,
          },
          notifications: {
            email: {
              transactions: true,
              security: true,
              promotions: false,
            },
            sms: {
              transactions: true,
              security: true,
            },
            push: {
              allTransactions: true,
              news: false,
            },
          },
          security: {
            twoFactorAuth: false,
            activeSessions: 2,
            lastPasswordUpdate: "2025-01-15",
            loginNotifications: true,
            suspiciousActivityAlerts: true,
            requirePasswordForTransactions: true,
          },
          language: {
            appLanguage: "spanish",
            dateFormat: "dd-mm-yyyy",
            currency: "clp",
            timezone: "santiago",
          },
          payment: {
            savedCards: [
              { id: 1, type: "Visa", last4: "4321", expiry: "12/24", isDefault: true },
              { id: 2, type: "Mastercard", last4: "8765", expiry: "04/25", isDefault: false },
            ],
            defaultPaymentMethod: "account-balance",
            limits: {
              daily: 1000000,
              monthly: 5000000,
            },
          },
        }

        setSettings(userSettings)
      } catch (err) {
        setError("Error al cargar la configuración")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSettings()
  }, [])

  const updateAppearanceSettings = async (updatedSettings: Partial<AppearanceSettings>) => {
    if (!settings) return false

    setIsSaving(true)
    try {
      // En un caso real, aquí harías una llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 800))

      setSettings({
        ...settings,
        appearance: {
          ...settings.appearance,
          ...updatedSettings,
        },
      })

      return true
    } catch (err) {
      setError("Error al actualizar la configuración de apariencia")
      console.error(err)
      return false
    } finally {
      setIsSaving(false)
    }
  }

  const updateNotificationSettings = async (updatedSettings: Partial<NotificationSettings>) => {
    if (!settings) return false

    setIsSaving(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 800))

      setSettings({
        ...settings,
        notifications: {
          ...settings.notifications,
          ...updatedSettings,
        },
      })

      return true
    } catch (err) {
      setError("Error al actualizar la configuración de notificaciones")
      console.error(err)
      return false
    } finally {
      setIsSaving(false)
    }
  }

  const updateSecuritySettings = async (updatedSettings: Partial<SecuritySettings>) => {
    if (!settings) return false

    setIsSaving(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 800))

      setSettings({
        ...settings,
        security: {
          ...settings.security,
          ...updatedSettings,
        },
      })

      return true
    } catch (err) {
      setError("Error al actualizar la configuración de seguridad")
      console.error(err)
      return false
    } finally {
      setIsSaving(false)
    }
  }

  const updateLanguageSettings = async (updatedSettings: Partial<LanguageSettings>) => {
    if (!settings) return false

    setIsSaving(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 800))

      setSettings({
        ...settings,
        language: {
          ...settings.language,
          ...updatedSettings,
        },
      })

      return true
    } catch (err) {
      setError("Error al actualizar la configuración de idioma")
      console.error(err)
      return false
    } finally {
      setIsSaving(false)
    }
  }

  const updatePaymentSettings = async (updatedSettings: Partial<PaymentSettings>) => {
    if (!settings) return false

    setIsSaving(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 800))

      setSettings({
        ...settings,
        payment: {
          ...settings.payment,
          ...updatedSettings,
        },
      })

      return true
    } catch (err) {
      setError("Error al actualizar la configuración de pagos")
      console.error(err)
      return false
    } finally {
      setIsSaving(false)
    }
  }

  const saveAllSettings = async () => {
    if (!settings) return false

    setIsSaving(true)
    try {
      // En un caso real, aquí harías una llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 800))

      toast.success("Configuración guardada correctamente")
      return true
    } catch (err) {
      setError("Error al guardar la configuración")
      toast.error("Error al guardar la configuración")
      console.error(err)
      return false
    } finally {
      setIsSaving(false)
    }
  }

  return {
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
  }
}
