import Layout from "@/modules/dashboard/common/components/Layout";
import TransactionsForm from "@/modules/dashboard/transactions/components/TransactionsForm";
import FrequentAccounts from "@/modules/dashboard/transactions/components/FrequentAccounts";

export default function TransactionsPage() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-2">
            Transferencias
          </h1>
          <p className="text-muted-foreground text-base">
            Envía dinero y selecciona una cuenta frecuente para agilizar tu
            experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <TransactionsForm />
          <FrequentAccounts />
        </div>
      </section>
    </Layout>
  );
}
