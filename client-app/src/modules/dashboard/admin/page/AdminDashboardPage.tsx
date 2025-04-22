"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
        <AdminHeader />
        <MetricsGrid />
        <Tabs
          defaultValue="overview"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
           <TabsList className="bg-transparent border border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] p-1 rounded-xl">
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

          <TabsContent value="overview" className="space-y-4">
            <OverviewTab />
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <UsersTab />
          </TabsContent>

          <TabsContent value="transactions" className="space-y-4">
            <TransactionsTab />
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <SecurityTab />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
