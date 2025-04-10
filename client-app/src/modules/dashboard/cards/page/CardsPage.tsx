import { useState } from "react";
import Layout from "@/modules/dashboard/common/components/Layout";
import { CardOverview } from "@/modules/dashboard/cards/components/CardOverview";
import { QuickActions } from "@/modules/dashboard/cards/components/QuickActions";
import { RecentTransactions } from "@/modules/dashboard/cards/components/RecentTransactions";
import { CardTabs } from "@/modules/dashboard/cards/components/CardTabs";

export default function CardsPage() {
  const [showTabs, setShowTabs] = useState(false);

  return (
    <Layout>
      <section className="container mx-auto space-y-6">
        {!showTabs ? (
          <>
            <div className="mb-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-2">
                Mis tarjetas
              </h1>
              <p className="text-sm text-muted-foreground">
                Administra tus tarjetas, revisa tus saldos y accede rápidamente
                a acciones comunes.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <CardOverview
                className="col-span-4"
                onSeeAll={() => setShowTabs(true)}
              />
              <div className="col-span-4 md:col-span-2 lg:col-span-3">
                <div className="grid gap-4">
                  <QuickActions />
                  <RecentTransactions />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>
            <CardTabs onBack={() => setShowTabs(false)} />
          </div>
        )}
      </section>
    </Layout>
  );
}
