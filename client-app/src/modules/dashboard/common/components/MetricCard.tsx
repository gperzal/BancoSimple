// src/modules/dashboard/common/components/MetricCard.tsx
import { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  description?: string;
  descriptionIcon?: ReactNode;
  descriptionColor?: string;
}

export const MetricCard = ({
  title,
  value,
  icon,
  description,
  descriptionIcon,
  descriptionColor = "text-muted-foreground",
}: MetricCardProps) => {
  return (
    <div className="dashboard-card hover:border-primary/50 hover:shadow transition-all">
      <div className="flex flex-row items-center justify-between pb-2">
        <p className="dashboard-card-title">{title}</p>
        <div className="dashboard-card-icon text-muted-foreground">{icon}</div>
      </div>
      <div className="dashboard-card-value">{value}</div>
      {description && (
        <p className={`text-xs mt-1 ${descriptionColor}`}>
          {descriptionIcon && (
            <span className="inline-flex items-center font-medium">
              {descriptionIcon}
              &nbsp;
            </span>
          )}
          {description}
        </p>
      )}
    </div>
  );
};
