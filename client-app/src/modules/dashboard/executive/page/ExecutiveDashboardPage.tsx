"use client";
import { useState } from "react";

// Importamos los componentes modulares
import { ExecutiveHeader } from "../components/ExecutiveHeader";
import { ExecutiveMetricsGrid } from "../components/ExecutiveMetricsGrid";
import { ClientSearchCard } from "../components/ClientSearchCard";
import { ClientDetailsCard } from "../components/ClientDetailsCard";

export default function ExecutiveDashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClient, setSelectedClient] = useState<string | null>(null);

  // Simulated client data
  const clients = [
    {
      id: "1",
      name: "María González",
      email: "maria.gonzalez@email.com",
      phone: "+52 55 1234 5678",
      status: "Activo",
      lastContact: "Hace 2 días",
      accountType: "Premium",
      pendingIssues: 0,
    },
    {
      id: "2",
      name: "Roberto Sánchez",
      email: "roberto.sanchez@email.com",
      phone: "+52 55 8765 4321",
      status: "Activo",
      lastContact: "Hace 1 semana",
      accountType: "Estándar",
      pendingIssues: 2,
    },
    {
      id: "3",
      name: "Laura Martínez",
      email: "laura.martinez@email.com",
      phone: "+52 55 2468 1357",
      status: "Inactivo",
      lastContact: "Hace 1 mes",
      accountType: "Premium",
      pendingIssues: 1,
    },
    {
      id: "4",
      name: "Carlos Rodríguez",
      email: "carlos.rodriguez@email.com",
      phone: "+52 55 1357 2468",
      status: "Activo",
      lastContact: "Hoy",
      accountType: "Estándar",
      pendingIssues: 0,
    },
    {
      id: "5",
      name: "Ana López",
      email: "ana.lopez@email.com",
      phone: "+52 55 9876 5432",
      status: "Bloqueado",
      lastContact: "Hace 2 meses",
      accountType: "Premium",
      pendingIssues: 3,
    },
  ];

  // Get selected client details
  const clientDetails =
    clients.find((client) => client.id === selectedClient) || null;

  return (
    <>
      <section className="container mx-auto space-y-6 py-4 animate-fade-in">
        {/* Executive Dashboard Header */}
        <ExecutiveHeader />

        {/* Executive Metrics */}
        <ExecutiveMetricsGrid />

        {/* Client Search and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Client Search */}
          <ClientSearchCard
            clients={clients}
            selectedClient={selectedClient}
            onClientSelect={setSelectedClient}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* Client Details */}
          <ClientDetailsCard client={clientDetails} />
        </div>
      </section>
    </>
  );
}
