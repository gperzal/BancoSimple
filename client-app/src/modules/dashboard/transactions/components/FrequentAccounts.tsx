import { useState } from "react";
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Filter } from "lucide-react";
import { toast } from "sonner";

// 🔁 Simulación de cuentas frecuentes
const frequentAccounts = [
  {
    id: "freq1",
    name: "María González",
    accountNumber: "ES91 2100 0418 4502 0005 1332",
    bank: "BBVA",
    lastTransfer: "2023-09-15",
  },
  {
    id: "freq2",
    name: "Carlos Rodríguez",
    accountNumber: "ES29 2100 1745 4702 0013 8521",
    bank: "Santander",
    lastTransfer: "2023-10-02",
  },
  {
    id: "freq3",
    name: "Ana Martínez",
    accountNumber: "ES05 0081 0297 1500 0188 6390",
    bank: "CaixaBank",
    lastTransfer: "2023-10-10",
  },
  {
    id: "freq4",
    name: "Luis Sánchez",
    accountNumber: "ES68 0049 1500 0512 3456 7890",
    bank: "Sabadell",
    lastTransfer: "2023-08-28",
  },
  {
    id: "freq5",
    name: "Elena Torres",
    accountNumber: "ES79 2100 0813 6101 2345 6789",
    bank: "BBVA",
    lastTransfer: "2023-09-22",
  },
  {
    id: "freq6",
    name: "Pedro Rodríguez",
    accountNumber: "ES29 2100 1745 4702 0013 8521",
    bank: "Santander",
    lastTransfer: "2023-10-02",
  },
  {
    id: "freq7",
    name: "Sara González",
    accountNumber: "ES91 2100 0418 4502 0005 1332",
    bank: "BBVA",
    lastTransfer: "2023-09-15",
  },
  {
    id: "freq8",
    name: "Miguel Rodríguez",
    accountNumber: "ES29 2100 1745 4702 0013 8521",
    bank: "Santander",
    lastTransfer: "2023-10-02",
  },
  {
    id: "freq9",
    name: "Sara González",
    accountNumber: "ES91 2100 0418 4502 0005 1332",
    bank: "BBVA",
    lastTransfer: "2023-09-15",
  },
  {
    id: "freq10",
    name: "Miguel Rodríguez",
    accountNumber: "ES29 2100 1745 4702 0013 8521",
    bank: "Santander",
    lastTransfer: "2023-10-02",
  },
];

export default function FrequentAccounts() {
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedAccount(id);
    const acc = frequentAccounts.find((a) => a.id === id);
    if (acc) {
      toast.success(`Cuenta seleccionada: ${acc.name}`);
    }
  };

  return (
    <div className="card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">
          Cuentas frecuentes
        </CardTitle>
        <CardDescription>
          Selecciona una cuenta frecuente para agilizar tus transferencias.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              {selectedAccount
                ? frequentAccounts.find((a) => a.id === selectedAccount)?.name
                : "Selecciona una cuenta..."}
              <Filter className="ml-2 h-4 w-4 opacity-50" />
            </Button>
          </DialogTrigger>
          <DialogContent className="space-y-2 max-h-[400px] overflow-y-auto">
            {frequentAccounts.map((acc) => (
              <div
                key={acc.id}
                className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-muted"
                onClick={() => handleSelect(acc.id)}
              >
                <div className="rounded-full bg-bank-primary/10 p-2">
                  <User className="h-4 w-4 text-bank-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">{acc.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {acc.bank} - {acc.accountNumber}
                  </p>
                </div>
              </div>
            ))}
          </DialogContent>
        </Dialog>

        {/* Lista de accesos rápidos */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium mb-2">Cuentas favoritas</h3>
          {frequentAccounts.slice(0, 8).map((acc) => (
            <div
              key={acc.id}
              className="flex justify-between items-center p-3 rounded-md cursor-pointer hover:bg-muted transition"
              onClick={() => handleSelect(acc.id)}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-bank-primary/10 p-2">
                  <User className="h-4 w-4 text-bank-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">{acc.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {acc.bank} - {acc.accountNumber}
                  </p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">
                Última: {new Date(acc.lastTransfer).toLocaleDateString("es-CL")}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </div>
  );
}
