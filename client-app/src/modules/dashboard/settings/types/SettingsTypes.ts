export interface AppearanceSettings {
  theme: "light" | "dark" | "system"
  animations: boolean
  compactMode: boolean
  showIcons: boolean
}

export interface NotificationSettings {
  email: {
    transactions: boolean
    security: boolean
    promotions: boolean
  }
  sms: {
    transactions: boolean
    security: boolean
  }
  push: {
    allTransactions: boolean
    news: boolean
  }
}

export interface SecuritySettings {
  twoFactorAuth: boolean
  activeSessions: number
  lastPasswordUpdate: string
  loginNotifications: boolean
  suspiciousActivityAlerts: boolean
  requirePasswordForTransactions: boolean
}

export interface LanguageSettings {
  appLanguage: "spanish" | "english" | "portuguese"
  dateFormat: "dd-mm-yyyy" | "mm-dd-yyyy" | "yyyy-mm-dd"
  currency: "clp" | "usd" | "eur"
  timezone: "santiago" | "buenos_aires" | "sao_paulo" | "mexico_city"
}

export interface PaymentMethod {
  id: number
  type: string
  last4: string
  expiry: string
  isDefault: boolean
}

export interface PaymentSettings {
  savedCards: PaymentMethod[]
  defaultPaymentMethod: "account-balance" | "default-card" | "ask-each-time"
  limits: {
    daily: number
    monthly: number
  }
}

export interface UserSettings {
  appearance: AppearanceSettings
  notifications: NotificationSettings
  security: SecuritySettings
  language: LanguageSettings
  payment: PaymentSettings
}
