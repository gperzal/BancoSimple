"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { toast } from "sonner";

interface UserData {
  nombres: string;
  apellidos: string;
  correo: string;
  telefono: string;
  documento_tipo: string;
  documento_numero: string;
  fecha_nacimiento: Date;
}

interface UserProfileFormProps {
  userData: UserData;
}

export const UserProfileForm: React.FC<UserProfileFormProps> = ({
  userData,
}) => {
  const [formData, setFormData] = useState(userData);
  const [date, setDate] = useState<Date | undefined>(userData.fecha_nacimiento);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, documento_tipo: value }));
  };

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setDate(date);
      setFormData((prev) => ({ ...prev, fecha_nacimiento: date }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);

    toast.success("Tus datos personales han sido actualizados correctamente.");
    setIsEditing(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Información Personal</CardTitle>
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
                disabled={!isEditing}
                className={!isEditing ? "bg-secondary/50" : ""}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="apellidos">Apellidos</Label>
              <Input
                id="apellidos"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={!isEditing ? "bg-secondary/50" : ""}
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
                disabled={!isEditing}
                className={!isEditing ? "bg-secondary/50" : ""}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono</Label>
              <Input
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={!isEditing ? "bg-secondary/50" : ""}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="documento_tipo">Tipo de documento</Label>
              <Select
                value={formData.documento_tipo}
                onValueChange={handleSelectChange}
                disabled={!isEditing}
              >
                <SelectTrigger
                  id="documento_tipo"
                  className={!isEditing ? "bg-secondary/50" : ""}
                >
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
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
                disabled={!isEditing}
                className={!isEditing ? "bg-secondary/50" : ""}
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
                    !isEditing ? "bg-secondary/50" : ""
                  }`}
                  disabled={!isEditing}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date
                    ? format(date, "PPP", { locale: es })
                    : "Seleccionar fecha"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateChange}
                  initialFocus
                  disabled={!isEditing}
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
                onClick={() => setIsEditing(false)}
              >
                Cancelar
              </Button>
              <Button type="submit">Guardar cambios</Button>
            </>
          ) : (
            <Button type="button" onClick={() => setIsEditing(true)}>
              Editar información
            </Button>
          )}
        </CardFooter>
      </form>
    </Card>
  );
};

export default UserProfileForm;