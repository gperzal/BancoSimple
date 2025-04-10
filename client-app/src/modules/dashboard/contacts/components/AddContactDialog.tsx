import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { UserRoundPen, UserRoundPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { notifySuccess } from "@/utils/notifications";

interface ContactFormData {
  id?: number;
  name: string;
  email: string;
  accountNumber: string;
}

interface AddContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultData?: ContactFormData;
}

export default function AddContactDialog({
  open,
  onOpenChange,
  defaultData,
}: AddContactDialogProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    accountNumber: "",
  });

  useEffect(() => {
    if (defaultData) {
      setFormData(defaultData);
    } else {
      setFormData({ name: "", email: "", accountNumber: "" });
    }
  }, [defaultData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onOpenChange(false);

    if (defaultData) {
      notifySuccess(
        "Contacto actualizado",
        "Los datos del contacto han sido modificados correctamente."
      );
    } else {
      notifySuccess(
        "¡Contacto añadido con éxito!",
        "Ahora está disponible en tu lista para transferencias."
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="popover">
        <DialogHeader>
          <DialogTitle>
            {defaultData ? "Actualizar contacto" : "Agregar nuevo contacto"}
          </DialogTitle>
          <DialogDescription>
            {defaultData
              ? "Modifica los datos del contacto seleccionado."
              : "Ingresa los datos del nuevo contacto para guardarlo en tu lista."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input
                id="name"
                placeholder="Juan Pérez"
                required
                className="input-primary"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="juan@example.com"
                required
                className="input-primary"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="accountNumber">Número de cuenta</Label>
              <Input
                id="accountNumber"
                placeholder="XXXX-XXXX-XXXX-XXXX"
                required
                className="input-primary"
                value={formData.accountNumber}
                onChange={(e) =>
                  setFormData({ ...formData, accountNumber: e.target.value })
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="button-primary-auto px-6 flex items-center gap-2"
            >
              {defaultData ? (
                <>
                  <UserRoundPen className="h-4 w-4" /> Actualizar contacto
                </>
              ) : (
                <>
                  <UserRoundPlus className="h-4 w-4" /> Guardar contacto
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
