// ✅ Archivo: /modules/dashboard/contacts/components/AddContactDialog.tsx

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { UserPlus } from "lucide-react";
  import { useState } from "react";
  import { toast } from "sonner";
  
  export function AddContactDialog() {
    const [open, setOpen] = useState(false);
  
    const handleAddContact = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setOpen(false);
      toast.success("Contacto agregado exitosamente.");
    };
  
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" /> Agregar contacto
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Agregar nuevo contacto</DialogTitle>
            <DialogDescription>
              Ingresa los datos del nuevo contacto para guardarlo en tu lista.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAddContact}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input id="name" placeholder="Juan Pérez" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="juan@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="accountNumber">Número de cuenta</Label>
                <Input
                  id="accountNumber"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Agregar contacto</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  }