import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface PieChartData {
  name: string;
  value: number;
}

interface PieChartCardProps {
  title: string;
  description?: string;
  data: PieChartData[];
  colors?: string[];
}

export const PieChartCard = ({
  title,
  description,
  data,
  colors = ["#8B5CF6", "#D946EF", "#F97316", "#0EA5E9", "#10B981"],
}: PieChartCardProps) => {
  return (
    <div className="dashboard-card">
      <div className="pb-4">
        <p className="text-lg font-semibold text-foreground mb-1">{title}</p>
        {description && (
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
        )}
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={90}
            dataKey="value"
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [
              `$${(Number(value) / 1_000_000).toFixed(1)}M`,
              undefined,
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
