import Layout from "@/modules/dashboard/common/components/Layout";

import { ContactsSection } from "@/modules/dashboard/contacts/components/ContactsSection";

export default function ContactsPage() {
  return (
    <Layout>
      <section className="container mx-auto space-y-6">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-2">
            Contactos Frecuentes
          </h1>
          <p className="text-muted-foreground text-base">
            Administra tus contactos frecuentes para agilizar futuras
            transferencias.
          </p>
        </div>

        <ContactsSection />
      </section>
    </Layout>
  );
}
