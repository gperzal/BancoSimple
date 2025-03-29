import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardList } from "./CardList";
import { CardHolders } from "./CardHolders";

interface CardTabsProps {
  onBack?: () => void;
}

export function CardTabs({ onBack }: CardTabsProps) {
  return (
    <Tabs defaultValue="all" className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {onBack && (
            <Button variant="ghost" size="sm" onClick={onBack}>
              ← Volver
            </Button>
          )}

          <TabsList>
            <TabsTrigger value="all">Todas</TabsTrigger>
            <TabsTrigger value="credit">Crédito</TabsTrigger>
            <TabsTrigger value="debit">Débito</TabsTrigger>
            <TabsTrigger value="prepaid">Prepago</TabsTrigger>
            <TabsTrigger value="holders">Titulares</TabsTrigger>
          </TabsList>
        </div>
      </div>

      <TabsContent value="all">
        <CardList type="all" />
      </TabsContent>
      <TabsContent value="credit">
        <CardList type="credit" />
      </TabsContent>
      <TabsContent value="debit">
        <CardList type="debit" />
      </TabsContent>
      <TabsContent value="prepaid">
        <CardList type="prepaid" />
      </TabsContent>
      <TabsContent value="holders">
        <CardHolders />
      </TabsContent>
    </Tabs>
  );
}
