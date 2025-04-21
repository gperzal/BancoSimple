import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Shield, Globe, Palette, CreditCard } from "lucide-react";
import { AppearanceSettings } from "@/modules/dashboard/settings/components/AppearanceSettings";
import { NotificationSettings } from "@/modules/dashboard/settings/components/NotificationSettings";
import { SecuritySettings } from "@/modules/dashboard/settings/components/SecuritySettings";
import { LanguageSettings } from "@/modules/dashboard/settings/components/LanguageSettings";
import { PaymentSettings } from "@/modules/dashboard/settings/components/PaymentSettings";
import { toast } from "sonner";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("appearance");

  const handleSaveSettings = () => {
    toast("Configuración guardada correctamente.");
  };

  return (
    <>
      <section className="container mx-auto space-y-6 py-4">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-2">
            Mi Configuración
          </h1>
          <p className="text-gray-500 mt-2">
            Configura tu cuenta de Banco Simple según tus preferencias
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Configuración de la Cuenta</CardTitle>
            <CardDescription>
              Personaliza tu experiencia en Banco Simple
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              defaultValue="appearance"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
                <TabsTrigger
                  value="appearance"
                  className="flex items-center gap-2"
                >
                  <Palette className="h-4 w-4" />
                  <span className="hidden md:inline">Apariencia</span>
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="flex items-center gap-2"
                >
                  <Bell className="h-4 w-4" />
                  <span className="hidden md:inline">Notificaciones</span>
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="flex items-center gap-2"
                >
                  <Shield className="h-4 w-4" />
                  <span className="hidden md:inline">Seguridad</span>
                </TabsTrigger>
                <TabsTrigger
                  value="language"
                  className="flex items-center gap-2"
                >
                  <Globe className="h-4 w-4" />
                  <span className="hidden md:inline">Idioma</span>
                </TabsTrigger>
                <TabsTrigger
                  value="payment"
                  className="flex items-center gap-2"
                >
                  <CreditCard className="h-4 w-4" />
                  <span className="hidden md:inline">Métodos de Pago</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="appearance">
                <AppearanceSettings />
              </TabsContent>

              <TabsContent value="notifications">
                <NotificationSettings />
              </TabsContent>

              <TabsContent value="security">
                <SecuritySettings />
              </TabsContent>

              <TabsContent value="language">
                <LanguageSettings />
              </TabsContent>

              <TabsContent value="payment">
                <PaymentSettings />
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSaveSettings}>Guardar Cambios</Button>
          </CardFooter>
        </Card>
      </section>
    </>
  );
};

export default Settings;
