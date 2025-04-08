import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRightLeft, Star, MoreHorizontal } from "lucide-react";

interface Contact {
  id: number;
  name: string;
  email: string;
  accountNumber: string;
  image: string;
  favorite: boolean;
}

export function ContactCard({ contact }: { contact: Contact }) {
  const initials = contact.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const handleToggleFavorite = () => {
    // lógica de actualización simulada
    console.log(`Favorito actualizado para: ${contact.name}`);
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
              contact.favorite ? "fill-yellow-500 text-yellow-500" : ""
            }`}
          />
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link to={`/transfers?contact=${contact.id}`}>
            <ArrowRightLeft className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
