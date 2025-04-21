import { SystemActivityCard } from "./SystemActivityCard"
import { AlertsCard } from "./AlertsCard"

export function OverviewTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <SystemActivityCard />
      <AlertsCard />
    </div>
  )
}
