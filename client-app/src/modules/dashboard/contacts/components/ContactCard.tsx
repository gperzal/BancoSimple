import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, MoreHorizontal, Trash2, Pencil } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  notifySuccess,
  notifyWarning,
  notifyInfo,
} from "@/utils/notifications";
import type { ContactFormData } from "../types/ContactTypes";

interface ContactCardProps {
  contact: ContactFormData;
  onEdit?: (contact: ContactFormData) => void;
  onDelete?: (id: number) => void;
  onToggleFavorite?: (id: number, value?: boolean) => void;
}

export function ContactCard({
  contact,
  onEdit,
  onDelete,
  onToggleFavorite,
}: ContactCardProps) {
  if (!contact.id) return null; // seguridad mínima

  const initials = contact.holderName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const handleDelete = () => {
    notifyWarning(
      "¿Eliminar contacto?",
      `${contact.holderName} será removido permanentemente de tu lista de contactos.`,
      () => {
        onDelete?.(contact.id!);
        notifySuccess(
          "Contacto eliminado",
          `${contact.holderName} fue eliminado correctamente.`
        );
      },
      () => {
        notifyInfo("Cancelado", "El contacto no fue eliminado.");
        return true;
      }
    );
  };

  const handleToggleFavorite = () => {
    if (!contact.active) {
      onToggleFavorite?.(contact.id!, true);
      notifySuccess(
        "Añadido a favoritos",
        `${contact.alias} fue marcado como favorito.`
      );
    } else {
      notifyWarning(
        "¿Quitar de favoritos?",
        `${contact.alias} será eliminado de tu lista de favoritos.`,
        () => {
          onToggleFavorite?.(contact.id!, false);
          notifySuccess(
            "Removido de favoritos",
            `${contact.alias} fue eliminado de favoritos.`
          );
        },
        () => {
          notifyInfo("Cancelado", "El contacto no fue eliminado de favoritos.");
          return true;
        }
      );
    }
  };

  return (
    <div className="flex items-center justify-between p-3 border rounded-lg">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

        <div>
          <p className="font-medium">{contact.alias}</p>
          <p className="text-sm text-muted-foreground">
            {contact.accountNumber}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={handleToggleFavorite}>
          <Star
            className={`h-4 w-4 ${
              contact.favorite
                ? "text-yellow-500 fill-yellow-500"
                : "text-gray-400"
            }`}
          />
        </Button>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-48 popover popover-menu">
            <div className="flex flex-col gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="justify-start gap-2"
                onClick={() => onEdit?.(contact)}
              >
                <Pencil className="h-4 w-4" /> Editar contacto
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="justify-start gap-2 text-destructive"
                onClick={handleDelete}
              >
                <Trash2 className="h-4 w-4" /> Eliminar contacto
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
