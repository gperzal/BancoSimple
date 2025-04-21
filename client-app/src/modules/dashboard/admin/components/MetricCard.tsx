import type React from "react"

interface MetricCardProps {
  title: string
  value: string
  icon: React.ReactNode
  description?: string
  descriptionIcon?: React.ReactNode
  descriptionColor?: string
}

export function MetricCard({
  title,
  value,
  icon,
  description,
  descriptionIcon,
  descriptionColor = "text-muted-foreground",
}: MetricCardProps) {
  return (
    <div className="dashboard-card hover:border-primary/50 hover:shadow transition-all">
      <div className="flex items-center justify-between pb-2">
        <p className="dashboard-card-title">{title}</p>
        <div className="dashboard-card-icon bg-[var(--color-primary-lighter)] text-white rounded-full">{icon}</div>
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
  )
}
