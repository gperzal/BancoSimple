import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

interface Contact {
  id: number;
  name: string;
  email: string;
  accountNumber: string;
  image: string;
  favorite: boolean;
}

interface ContactCardProps {
  contact: Contact;
  onEdit?: (contact: Contact) => void;
  onDelete?: (id: number) => void;
  onToggleFavorite?: (id: number, value?: boolean) => void;
}

export function ContactCard({
  contact,
  onEdit,
  onDelete,
  onToggleFavorite,
}: ContactCardProps) {
  const initials = contact.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const handleDelete = () => {
    notifyWarning(
      "¿Eliminar contacto?",
      `${contact.name} será removido permanentemente de tu lista de contactos.`,
      () => {
        onDelete?.(contact.id);
        notifySuccess(
          "Contacto eliminado",
          `${contact.name} fue eliminado correctamente.`
        );
      },
      () => {
        notifyInfo("Cancelado", "El contacto no fue eliminado.");
        return true;
      }
    );
  };

  const handleToggleFavorite = () => {
    if (!contact.favorite) {
      onToggleFavorite?.(contact.id, true);
      notifySuccess(
        "Añadido a favoritos",
        `${contact.name} fue marcado como favorito.`
      );
    } else {
      notifyWarning(
        "¿Quitar de favoritos?",
        `${contact.name} será eliminado de tu lista de favoritos.`,
        () => {
          onToggleFavorite?.(contact.id, false);
          notifySuccess(
            "Removido de favoritos",
            `${contact.name} fue eliminado de favoritos.`
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
          <AvatarImage src={contact.image} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{contact.name}</p>
          <p className="text-sm text-muted-foreground">{contact.email}</p>
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
