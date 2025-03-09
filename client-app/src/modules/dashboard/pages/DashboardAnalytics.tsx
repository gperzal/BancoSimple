import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@shadcn/card";

const DashboardAnalytics = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analíticas</CardTitle>
        <CardDescription>Visualización de datos y tendencias</CardDescription>
      </CardHeader>
      <CardContent className="px-2">
        <div className="flex h-64 w-full items-center justify-center rounded-md border border-dashed border-gray-300 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            Gráficos y análisis próximamente...
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardAnalytics;
