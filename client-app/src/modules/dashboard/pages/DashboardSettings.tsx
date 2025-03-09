import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@shadcn/card";
import { Switch } from "@shadcn/switch";

const DashboardSettings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Configuración</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm">Notificaciones</span>
          <Switch checked={notifications} onCheckedChange={setNotifications} />
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm">Modo Oscuro</span>
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardSettings;
