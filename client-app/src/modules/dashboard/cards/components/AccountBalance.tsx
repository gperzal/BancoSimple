import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { userData } from "@/utils/mockData";
import { Banknote, PiggyBank } from "lucide-react";

const AccountBalance = () => {
  return (
    <Card className="w-full">
      <CardContent>
        <Tabs defaultValue={userData.accounts[0].id} className="w-full ">
          <TabsList className="bg-transparent border border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] p-1 rounded-xl">
            {userData.accounts.map((account) => (
              <TabsTrigger
                key={account.id}
                value={account.id}
                className="flex items-center gap-1 text-sm tabs-trigger-primary"
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
