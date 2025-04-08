import { useState } from "react";
import Layout from "@/modules/dashboard/common/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserProfileForm } from "@/modules/dashboard/profile/components/UserProfileForm";
import { UserAddressForm } from "@/modules/dashboard/profile/components/UserAddressForm";
import { UserSecurityForm } from "@/modules/dashboard/profile/components/UserSecurityForm";
import { UserProfileHeader } from "@/modules/dashboard/profile/components/UserProfileHeader";
import { User } from "@/utils/mockData";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <Layout>
      <section className="container mx-auto py-6 space-y-6">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-2">
            Mi Perfil
          </h1>
          <p className="text-muted-foreground text-base">
            Administra tus datos personales, direcciones y seguridad.
          </p>
        </div>

        <UserProfileHeader user={User} />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="personal">Datos Personales</TabsTrigger>
            <TabsTrigger value="direcciones">Direcciones</TabsTrigger>
            <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <UserProfileForm userData={User} />
          </TabsContent>

          <TabsContent value="direcciones">
            <UserAddressForm addresses={User.direcciones} />
          </TabsContent>

          <TabsContent value="seguridad">
            <UserSecurityForm />
          </TabsContent>
        </Tabs>
      </section>
    </Layout>
  );
};

export default ProfilePage;
