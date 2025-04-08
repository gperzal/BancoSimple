import Layout from "@/modules/dashboard/common/components/Layout";
import TransactionsForm from "@/modules/dashboard/transactions/components/TransactionsForm";

import { FrequentContactsSection } from "@/modules/dashboard/transactions/components/FrequentContactsSection";

export default function TransactionsPage() {
  return (
    <Layout>
      <section className="container mx-auto py-6 space-y-6">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-2">
            Transferencias
          </h1>
          <p className="text-muted-foreground text-base">
            Envía dinero y selecciona una cuenta frecuente para agilizar tu
            experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 ">
          <TransactionsForm />
          <FrequentContactsSection />
        </div>
      </section>
    </Layout>
  );
}
