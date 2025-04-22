import { Card, CardContent } from "@/components/ui/card"
import { Users, ShieldCheck, UserCog, UserX } from "lucide-react"

export function RolesSummary() {
  const roleStats = [
    {
      title: "Total Usuarios",
      value: "2,458",
      icon: <Users className="h-4 w-4" />,
      color: "bg-blue-500",
    },
    {
      title: "Administradores",
      value: "12",
      icon: <ShieldCheck className="h-4 w-4" />,
      color: "bg-red-500",
    },
    {
      title: "Ejecutivos",
      value: "45",
      icon: <UserCog className="h-4 w-4" />,
      color: "bg-amber-500",
    },
    {
      title: "Usuarios Bloqueados",
      value: "23",
      icon: <UserX className="h-4 w-4" />,
      color: "bg-gray-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {roleStats.map((stat, index) => (
        <Card key={index} className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <p className="text-3xl font-bold text-primary mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} text-white p-3 rounded-full`}>{stat.icon}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
