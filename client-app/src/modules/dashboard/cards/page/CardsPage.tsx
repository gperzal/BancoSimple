"use client"

import { useState } from "react"
import { CardHeader } from "@/modules/dashboard/cards/components/CardHeader"
import { CardOverview } from "@/modules/dashboard/cards/components/CardOverview"
import { QuickActions } from "@/modules/dashboard/cards/components/QuickActions"
import { RecentTransactions } from "@/modules/dashboard/cards/components/RecentTransactions"
import { CardTabs } from "@/modules/dashboard/cards/components/CardTabs"

export default function CardsPage() {
  const [showTabs, setShowTabs] = useState(false)

  return (
    <section className="container mx-auto space-y-6 py-4 animate-fade-in">
      {!showTabs ? (
        <>
          <CardHeader onSeeAll={() => setShowTabs(true)} />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <CardOverview className="col-span-4" onSeeAll={() => setShowTabs(true)} />
            <div className="col-span-4 md:col-span-2 lg:col-span-3">
              <div className="grid gap-6">
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
  )
}
