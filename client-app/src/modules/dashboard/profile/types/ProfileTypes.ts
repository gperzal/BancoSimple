export interface User {
  id: string
  nombres: string
  apellidos: string
  correo: string
  telefono: string
  documento_tipo: string
  documento_numero: string
  fecha_nacimiento: Date
  fecha_registro: Date
  categoria: string
  verificado: boolean
  productos: number
  direcciones: Address[]
}

export interface Address {
  id: number
  tipo_direccion: string
  calle: string
  numero: string
  comuna: string
  ciudad: string
  region: string
  codigo_postal: string
  pais: string
  activa: boolean
}

export interface SecurityEvent {
  type: "login" | "password_change" | "profile_update" | "security_setting"
  device: string
  location: string
  date: string
}

export interface SecuritySettings {
  twoFactorAuth: boolean
  sessionNotifications: boolean
  biometricLogin: boolean
  lastPasswordChange: string
}
