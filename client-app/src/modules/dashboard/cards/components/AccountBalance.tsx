import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { userData } from "@/utils/mockData";
import { Banknote, PiggyBank } from "lucide-react";

const AccountBalance = () => {
  return (
    <Card className="w-500 md:w-full lg:w-1/2 xl:w-1/3 mx-start">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold tracking-tight">
          Mis Cuentas
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Vista general de tus balances y movimientos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={userData.accounts[0].id} className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            {userData.accounts.map((account) => (
              <TabsTrigger
                key={account.id}
                value={account.id}
                className="flex items-center gap-1 text-sm"
              >
                {account.name.includes("Ahorro") ? (
                  <PiggyBank className="w-4 h-4" />
                ) : (
                  <Banknote className="w-4 h-4" />
                )}
                {account.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {userData.accounts.map((account) => (
            <TabsContent
              key={account.id}
              value={account.id}
              className="space-y-6"
            >
              <div className="grid gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Número de cuenta
                  </p>
                  <p className="font-medium text-sm">{account.number}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Balance disponible
                  </p>
                  <p className="text-4xl font-bold text-bank-primary">
                    {account.balance.toLocaleString("es-CL", {
                      style: "currency",
                      currency: account.currency,
                    })}
                  </p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AccountBalance;
