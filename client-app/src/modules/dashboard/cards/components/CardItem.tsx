// modules/dashboard/cards/components/CardItem.tsx
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface CardItemProps {
  name: string;
  number: string;
  validFrom: string;
  expiry: string;
  cvv?: string;
  backgroundUrl?: string;
  logoUrl: string;
  className?: string;
}

export const CardItem = ({
  name,
  number,
  validFrom,
  expiry,
  cvv,
  backgroundUrl,
  logoUrl,
  className,
}: CardItemProps) => {
  const [showData, setShowData] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleToggle = () => {
    if (showData) {
      setShowData(false);
    } else {
      setDialogOpen(true);
    }
  };

  const handleValidate = () => {
    if (inputCode === "010203") {
      setShowData(true);
      setDialogOpen(false);
      const timer = setTimeout(() => setShowData(false), 60000);
      setTimeoutId(timer);
    } else {
      alert("Código incorrecto");
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <div
      className={cn(
        "w-80 sm:w-96 h-56 rounded-xl relative text-white shadow-2xl transition-transform transform sm:hover:scale-105 overflow-hidden",
        "bg-background",
        className
      )}
    >
      {backgroundUrl && (
        <img
          src={backgroundUrl}
          className="absolute object-cover w-full h-full rounded-xl z-0"
          alt="Card background"
        />
      )}

      <div className="relative z-10 w-full h-full px-8 py-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-light text-sm">Titular</p>
            <p className="font-medium tracking-widest text-base sm:text-lg">
              {name}
            </p>
          </div>
          <img
            className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
            src={logoUrl}
            alt="Logo"
          />
        </div>

        <div className="pt-2">
          <p className="font-light text-sm">Número de tarjeta</p>
          <p className="tracking-wider font-medium text-base sm:text-lg">
            {showData ? number : `**** **** **** ${number.slice(-4)}`}
          </p>
        </div>

        <div className="pt-6 pr-6">
          <div className="flex justify-between">
            <div>
              <p className="text-xs font-light">Desde</p>
              <p className="text-sm font-medium tracking-widest">{validFrom}</p>
            </div>
            <div>
              <p className="text-xs font-light">Vence</p>
              <p className="text-sm font-medium tracking-widest">{expiry}</p>
            </div>
            <div>
              <p className="text-xs font-light">CVV</p>
              <p className="text-sm font-bold tracking-wider">
                {showData ? cvv : "···"}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleToggle}
            aria-label="Mostrar datos"
            className="text-white hover:text-primary"
          >
            {showData ? <EyeOff size={18} /> : <Eye size={18} />}
          </Button>
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="z-[60] bg-background text-foreground">
            <DialogHeader>
              <DialogTitle>Ingrese su clave para ver los datos</DialogTitle>
            </DialogHeader>
            <Input
              placeholder="Clave de seguridad"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              maxLength={6}
              type="password"
            />
            <Button onClick={handleValidate} className="mt-2 w-full">
              Validar
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
