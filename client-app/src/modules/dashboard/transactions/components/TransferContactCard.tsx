import { Button } from "@/components/ui/button";
import { ArrowRightLeft } from "lucide-react";

interface Contact {
  id: number;
  name: string;
  email: string;
  accountNumber: string;
  image: string;
  favorite: boolean;
}

interface TransferContactCardProps {
  contact: Contact;

  onSelect?: (contact: Contact) => void;
  onEdit?: (contact: Contact) => void;
}

export function TransferContactCard({
  contact,
  onSelect,
}: TransferContactCardProps) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/40 transition-colors">
      <div className="min-w-0">
        <p className="font-medium truncate">{contact.name}</p>
        <p className="text-sm text-muted-foreground truncate">
          {contact.email}
        </p>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onSelect?.(contact)}
        className="ml-4 shrink-0"
      >
        <ArrowRightLeft className="h-4 w-4" />
      </Button>
    </div>
  );
}
