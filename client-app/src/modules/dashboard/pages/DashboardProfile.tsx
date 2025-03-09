import { Card, CardHeader, CardTitle, CardContent } from "@shadcn/card";
import { Avatar, AvatarFallback } from "@shadcn/avatar";
import { useAuth } from "@/context/AuthContext";

const DashboardProfile = () => {
  const { user } = useAuth();

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="flex flex-col items-center space-y-2">
        <Avatar className="h-16 w-16">
          <AvatarFallback className="bg-resolution-blue-100 text-resolution-blue-700">
            {user?.name?.charAt(0) || "U"}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl font-bold">
          {user?.name || "Usuario"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Correo: {user?.email || "No definido"}
        </p>
        <p className="text-sm text-muted-foreground">
          Saldo: ${user?.balance?.toLocaleString() || 0}
        </p>
      </CardContent>
    </Card>
  );
};

export default DashboardProfile;
