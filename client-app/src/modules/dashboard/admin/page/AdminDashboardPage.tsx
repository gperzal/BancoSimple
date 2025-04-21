"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Importamos los componentes modulares
import { AdminHeader } from "../components/AdminHeader";
import { MetricsGrid } from "../components/MetricsGrid";
import { OverviewTab } from "../components/OverviewTab";
import { UsersTab } from "../components/UsersTab";
import { TransactionsTab } from "../components/TransactionsTab";
import { SecurityTab } from "../components/SecurityTab";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <section className="container mx-auto space-y-6 py-4 animate-fade-in">
        {/* Admin Dashboard Header */}
        <AdminHeader />

        {/* Admin Metrics */}
        <MetricsGrid />

        {/* Admin Tabs */}
        <Tabs
          defaultValue="overview"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="flex mb-6 space-x-2 overflow-x-auto">
            <TabsTrigger value="overview" className="tabs-trigger-primary">
              Resumen
            </TabsTrigger>
            <TabsTrigger value="users" className="tabs-trigger-primary">
              Usuarios
            </TabsTrigger>
            <TabsTrigger value="transactions" className="tabs-trigger-primary">
              Transacciones
            </TabsTrigger>
            <TabsTrigger value="security" className="tabs-trigger-primary">
              Seguridad
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <OverviewTab />
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-4">
            <UsersTab />
          </TabsContent>

          {/* Transactions Tab */}
          <TabsContent value="transactions" className="space-y-4">
            <TransactionsTab />
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-4">
            <SecurityTab />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
