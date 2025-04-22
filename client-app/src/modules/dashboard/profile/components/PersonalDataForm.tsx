"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon, User } from "lucide-react"
import { toast } from "sonner"
import type { User as UserType } from "../types/ProfileTypes"

interface PersonalDataFormProps {
  userData: UserType
  onUpdate: (data: Partial<UserType>) => Promise<boolean>
}

export function PersonalDataForm({ userData, onUpdate }: PersonalDataFormProps) {
  const [formData, setFormData] = useState({
    nombres: userData.nombres,
    apellidos: userData.apellidos,
    correo: userData.correo,
    telefono: userData.telefono,
    documento_tipo: userData.documento_tipo,
    documento_numero: userData.documento_numero,
    fecha_nacimiento: userData.fecha_nacimiento,
  })

  const [date, setDate] = useState<Date | undefined>(userData.fecha_nacimiento)
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, documento_tipo: value }))
  }

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setDate(date)
      setFormData((prev) => ({ ...prev, fecha_nacimiento: date }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const success = await onUpdate(formData)
      if (success) {
        toast.success("Tus datos personales han sido actualizados correctamente")
        setIsEditing(false)
      }
    } catch (error) {
      toast.error("Error al actualizar los datos personales")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl flex items-center">
          <User className="h-5 w-5 mr-2 text-primary" />
          Información Personal
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombres">Nombres</Label>
              <Input
                id="nombres"
                name="nombres"
                value={formData.nombres}
                onChange={handleInputChange}
                disabled={!isEditing || isLoading}
                className={!isEditing ? "input-disabled" : "input-primary"}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="apellidos">Apellidos</Label>
              <Input
                id="apellidos"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleInputChange}
                disabled={!isEditing || isLoading}
                className={!isEditing ? "input-disabled" : "input-primary"}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="correo">Correo electrónico</Label>
              <Input
                id="correo"
                name="correo"
                type="email"
                value={formData.correo}
                onChange={handleInputChange}
                disabled={!isEditing || isLoading}
                className={!isEditing ? "input-disabled" : "input-primary"}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono</Label>
              <Input
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                disabled={!isEditing || isLoading}
                className={!isEditing ? "input-disabled" : "input-primary"}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="documento_tipo">Tipo de documento</Label>
              <Select
                value={formData.documento_tipo}
                onValueChange={handleSelectChange}
                disabled={!isEditing || isLoading}
              >
                <SelectTrigger id="documento_tipo" className={!isEditing ? "select-disabled" : "select-primary"}>
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent className="popover">
                  <SelectItem value="RUT">RUT</SelectItem>
                  <SelectItem value="DNI">DNI</SelectItem>
                  <SelectItem value="Pasaporte">Pasaporte</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="documento_numero">Número de documento</Label>
              <Input
                id="documento_numero"
                name="documento_numero"
                value={formData.documento_numero}
                onChange={handleInputChange}
                disabled={!isEditing || isLoading}
                className={!isEditing ? "input-disabled" : "input-primary"}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fecha_nacimiento">Fecha de nacimiento</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start text-left font-normal ${
                    !isEditing ? "button-outline-disabled" : "button-outline-auto"
                  }`}
                  disabled={!isEditing || isLoading}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP", { locale: es }) : "Seleccionar fecha"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 popover" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateChange}
                  initialFocus
                  disabled={!isEditing || isLoading}
                />
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          {isEditing ? (
            <>
              <Button
                type="button"
                variant="outline"
                className="button-outline-auto"
                onClick={() => setIsEditing(false)}
                disabled={isLoading}
              >
                Cancelar
              </Button>
              <Button type="submit" className="button-primary-auto" disabled={isLoading}>
                {isLoading ? "Guardando..." : "Guardar cambios"}
              </Button>
            </>
          ) : (
            <Button type="button" onClick={() => setIsEditing(true)} className="button-primary-auto">
              Editar información
            </Button>
          )}
        </CardFooter>
      </form>
    </Card>
  )
}
