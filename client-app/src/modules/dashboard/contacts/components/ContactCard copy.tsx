import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  ArrowRightLeft,
  Star,
  MoreHorizontal,
  Trash2,
  Pencil,
} from "lucide-react";
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

type ContactCardMode = "contacts" | "transactions";

interface ContactCardProps {
  contact: Contact;
  mode?: ContactCardMode;
  onSelect?: (contact: Contact) => void;
  onEdit?: (contact: Contact) => void;
}

export function ContactCard({
  contact,
  onSelect,
  onEdit,
  mode = "contacts",
}: ContactCardProps) {
  const initials = contact.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const handleToggleFavorite = () => {
    console.log(`Favorito actualizado para: ${contact.name}`);
  };

  const handleDelete = () => {
    notifyWarning(
      "¿Eliminar contacto?",
      `${contact.name} será removido permanentemente de tu lista de contactos.`,
      () =>
        notifySuccess(
          "Contacto eliminado",
          `${contact.name} fue eliminado correctamente.`
        ),
      () => {
        notifyInfo("Cancelado", "El contacto no fue eliminado.");
        return true;
      }
    );
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
        {mode === "contacts" && (
          <Button variant="ghost" size="sm" onClick={handleToggleFavorite}>
            <Star
              className={`h-4 w-4 ${
                contact.favorite
                  ? "text-yellow-500 fill-yellow-500"
                  : "text-yellow-500"
              }`}
            />
          </Button>
        )}

        {mode === "transactions" && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onSelect?.(contact)}
          >
            <ArrowRightLeft className="h-4 w-4" />
          </Button>
        )}

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
