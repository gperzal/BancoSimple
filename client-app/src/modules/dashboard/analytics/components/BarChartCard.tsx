import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface TransactionData {
  month: string;
  ingresos: number;
  gastos: number;
}

interface BarChartCardProps {
  title: string;
  description?: string;
  data: TransactionData[];
}

export const BarChartCard = ({
  title,
  description,
  data,
}: BarChartCardProps) => {
  return (
    <div className="dashboard-card">
      <div className="pb-4">
        <p className="text-lg font-semibold text-foreground mb-1">{title}</p>
        {description && (
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
        )}
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            tickFormatter={(value) => `$${(value / 1_000_000).toFixed(1)}M`}
          />
          <Tooltip
            formatter={(value) => [
              `$${(Number(value) / 1_000_000).toFixed(1)}M`,
              undefined,
            ]}
            labelFormatter={(label) => `Mes: ${label}`}
          />
          <Legend />
          <Bar dataKey="ingresos" fill="#8B5CF6" name="Ingresos" />
          <Bar dataKey="gastos" fill="#F97316" name="Gastos" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
