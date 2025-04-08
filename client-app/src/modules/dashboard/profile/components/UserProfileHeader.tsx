"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, CreditCardIcon, CheckCircleIcon } from "lucide-react";

interface User {
  nombres: string;
  apellidos: string;
  correo: string;
  telefono: string;
  fecha_registro: Date;
}

interface UserProfileHeaderProps {
  user: User;
}

export const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({
  user,
}) => {
  const initials = `${user.nombres.charAt(0)}${user.apellidos.charAt(0)}`;

  return (
    <Card className="w-full bg-white border-none shadow-sm">
      <CardContent>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Avatar className="h-20 w-20 border-4 border-primary/10">
            <AvatarImage src="" alt={`${user.nombres} ${user.apellidos}`} />
            <AvatarFallback className="text-xl bg-primary/10 text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl font-bold">
              {user.nombres} {user.apellidos}
            </h1>
            <p className="text-muted-foreground">{user.correo}</p>
            <p className="text-muted-foreground">{user.telefono}</p>

            <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
              <Badge variant="outline" className="flex items-center gap-1">
                <CheckCircleIcon className="h-3 w-3" />
                Verificado
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <CalendarIcon className="h-3 w-3" />
                Cliente desde {user.fecha_registro.getFullYear()}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <CreditCardIcon className="h-3 w-3" />3 Productos
              </Badge>
            </div>
          </div>

          <div className="flex-shrink-0 hidden md:block">
            <div className="bg-primary/5 p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">Categoría</p>
              <p className="text-lg font-semibold text-primary">
                Cliente Premium
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
