// src/modules/dashboard/analytics/components/AnalyticsCard.tsx

import { ReactNode } from "react";

interface AnalyticsCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "up" | "down";
  icon: ReactNode;
  iconColorClass?: string;
}

export const AnalyticsCard = ({
  title,
  value,
  change,
  changeType = "up",
  icon,
  iconColorClass = "text-primary bg-primary/10",
}: AnalyticsCardProps) => {
  return (
    <div className="dashboard-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="dashboard-card-title">{title}</p>
          <div className="flex items-baseline gap-1">
            <h3 className="dashboard-card-value">{value}</h3>
            {change && (
              <span
                className={`dashboard-card-change ${
                  changeType === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                {changeType === "up" ? "▲" : "▼"} {change}
              </span>
            )}
          </div>
        </div>
        <div className={`dashboard-card-icon ${iconColorClass}`}>{icon}</div>
      </div>
    </div>
  );
};
