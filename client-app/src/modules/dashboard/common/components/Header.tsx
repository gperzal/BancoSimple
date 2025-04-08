// src/modules/dashboard/common/components/Header.tsx

import {
  Bell,
  LogOut,
  Menu,
  Moon,
  Sun,
  User,
  Settings,
  ChevronRight,
  Home,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import { useLocation, Link } from "react-router-dom";

// Importamos la clase .header-icon-button que definiste en tu index.css
// import { Button } from "@/components/ui/button"; // si ya no la usas, puedes comentarlo

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const { user, logout } = useAuth();

  const location = useLocation();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const breadcrumbLabels: Record<string, string> = {
    home: "Inicio",
    profile: "Perfil",
    settings: "Configuraciones",
    cards: "Tarjetas",
    transactions: "Transferencias",
    history: "Historial",
  };

  // Generador de breadcrumb
  const generateBreadcrumb = () => {
    const paths = location.pathname.split("/").filter(Boolean);
    if (paths.length <= 1) return null;

    const breadcrumbs = [];
    let currentPath = "";

    // Inicio
    breadcrumbs.push(
      <Link
        key="home"
        to="/dashboard"
        className="flex items-center text-white hover:text-white/80 transition-colors"
      >
        <Home size={16} />
      </Link>
    );

    // Chevron
    breadcrumbs.push(
      <ChevronRight
        key="chevron-home"
        className="mx-1 text-white/80"
        size={16}
      />
    );

    // Rutas intermedias
    paths.forEach((path, index) => {
      if (index === 0) return; // skip "dashboard"
      currentPath += `/${path}`;
      const isLast = index === paths.length - 1;
      const title =
        breadcrumbLabels[path] ||
        path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ");

      breadcrumbs.push(
        <Link
          key={path}
          to={`/dashboard${currentPath}`}
          className={
            isLast
              ? "font-medium text-white hover:text-white/80"
              : "text-white/80 hover:text-white transition-colors"
          }
        >
          {title}
        </Link>
      );

      if (!isLast) {
        breadcrumbs.push(
          <ChevronRight
            key={`chevron-${path}`}
            className="mx-1 text-white/80"
            size={16}
          />
        );
      }
    });

    return breadcrumbs;
  };

  const breadcrumb = generateBreadcrumb();

  function getInitials(name: string) {
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0].charAt(0).toUpperCase();
    return (
      words[0].charAt(0).toUpperCase() +
      words[words.length - 1].charAt(0).toUpperCase()
    );
  }

  return (
    <header
      className="
        sticky top-0 z-10 
        border-b border-[var(--sidebar-border)]
        bg-[var(--sidebar-bg)]
        px-4 py-3 
        shadow-sm 
      "
    >
      <div className="flex items-center justify-between">
        {/* Breadcrumb / Botón de menú */}
        <div className="flex items-center gap-3">
          {/* Botón de menú (versión móvil) */}
          <button
            onClick={onMenuClick}
            aria-label="Abrir menú"
            className="header-icon-button md:hidden"
          >
            <Menu size={20} />
          </button>

          {/* Breadcrumb */}
          {breadcrumb ? (
            <div className="hidden md:flex items-center text-sm">
              {breadcrumb}
            </div>
          ) : (
            <img src="/iconow.svg" alt="BancoSimple" className="w-6 h-6 mr-2" />
          )}
        </div>

        {/* Sección derecha: tema, notificaciones, usuario */}
        <div className="flex items-center gap-3">
          {/* Botón para cambiar tema */}
          <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="header-icon-button"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Notificaciones */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                aria-label="Notificaciones"
                className="header-icon-button relative"
              >
                <Bell size={18} />
                <Badge
                  className="
                    absolute -right-1 -top-1 
                    h-5 w-5 rounded-full p-0 text-xs font-bold
                    flex items-center justify-center
                    bg-white text-primary 
                    border border-white/30
                  "
                >
                  3
                </Badge>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="popover w-80">
              <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-[300px] overflow-y-auto">
                {[
                  "Transferencia recibida",
                  "Pago exitoso",
                  "Alerta de seguridad",
                ].map((title, idx) => (
                  <DropdownMenuItem
                    key={idx}
                    className="flex flex-col items-start p-3 hover:bg-muted cursor-pointer"
                  >
                    <div className="font-medium">{title}</div>
                    <div className="text-sm text-muted-foreground">
                      {title === "Transferencia recibida"
                        ? "Has recibido $500 de Juan Pérez"
                        : title === "Pago exitoso"
                        ? "Tu pago de $120 fue procesado"
                        : "Inicio de sesión desde un nuevo dispositivo"}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {title === "Transferencia recibida"
                        ? "Hace 2 horas"
                        : title === "Pago exitoso"
                        ? "Hace 1 día"
                        : "Hace 2 días"}
                    </div>
                  </DropdownMenuItem>
                ))}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center text-primary cursor-pointer">
                Ver todas
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Avatar de usuario */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="header-icon-button group relative p-0 overflow-hidden">
                <Avatar className="w-10 h-10">
                  <AvatarFallback
                    className="
                text-white 
                font-semibold 
                transition-colors 
                group-hover:text-primary
              "
                  >
                    {getInitials(user?.name || "Usuario Desconocido")}
                  </AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="popover">
              <DropdownMenuLabel className="text-foreground font-semibold">
                Mi Cuenta
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-border" />

              {[
                { icon: User, label: "Perfil", to: "/dashboard/profile" },
                {
                  icon: Settings,
                  label: "Configuración",
                  to: "/dashboard/settings",
                },
              ].map(({ icon: Icon, label, to }) => (
                <Link to={to} key={label}>
                  <DropdownMenuItem
                    className="
                      group flex items-center cursor-pointer
                      text-foreground hover:text-primary
                      hover:bg-muted transition-colors
                    "
                  >
                    <Icon className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                    {label}
                  </DropdownMenuItem>
                </Link>
              ))}

              <DropdownMenuSeparator className="my-1 h-px bg-[var(--popover-border-light)] dark:bg-[var(--popover-border-dark)]" />

              <DropdownMenuItem
                onClick={logout}
                className="
              group flex items-center cursor-pointer
                  text-foreground hover:text-primary
                  hover:bg-muted transition-colors
              "
              >
                <LogOut className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                Cerrar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
