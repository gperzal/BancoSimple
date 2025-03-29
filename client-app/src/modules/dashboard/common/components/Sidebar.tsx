// modules/dashbaord/common/components/Sidebar.tsx
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  Repeat,
  History,
  CreditCard,
  BarChart2,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
  ChevronRight,
  X,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const { logout } = useAuth();
  const { theme } = useTheme();
  const [configOpen, setConfigOpen] = useState(
    location.pathname.includes("/dashboard/settings")
  );
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const backdropStyle = {
    backgroundColor:
      theme === "dark"
        ? "var(--color-background-dark)"
        : "var(--color-background-light)",
    zIndex: 40,
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 md:hidden"
          style={backdropStyle}
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 transform border-r bg-background transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          collapsed ? "w-20" : "w-72"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4">
            <Link
              to="/dashboard"
              className="text-xl font-bold text-primary truncate"
            >
              {collapsed ? "BS" : "BancoSimple"}
            </Link>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCollapsed(!collapsed)}
                aria-label="Colapsar menú"
              >
                {collapsed ? (
                  <ChevronsRight size={20} />
                ) : (
                  <ChevronsLeft size={20} />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={onClose}
                aria-label="Cerrar menú"
              >
                <X size={20} />
              </Button>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            <Link
              to="/dashboard"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive("/dashboard")
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              )}
            >
              <LayoutDashboard size={18} /> {!collapsed && "Inicio"}
            </Link>

            <Link
              to="/dashboard/profile"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive("/dashboard/profile")
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              )}
            >
              <User size={18} /> {!collapsed && "Perfil"}
            </Link>

            <Link
              to="/dashboard/transactions"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive("/dashboard/transactions")
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              )}
            >
              <Repeat size={18} /> {!collapsed && "Transferencias"}
            </Link>

            <Link
              to="/dashboard/history"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive("/dashboard/history")
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              )}
            >
              <History size={18} /> {!collapsed && "Historial"}
            </Link>

            <Link
              to="/dashboard/cards"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive("/dashboard/cards")
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              )}
            >
              <CreditCard size={18} /> {!collapsed && "Tarjetas"}
            </Link>

            <Link
              to="/dashboard/analytics"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive("/dashboard/analytics")
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              )}
            >
              <BarChart2 size={18} /> {!collapsed && "Analítica"}
            </Link>

            <Collapsible open={configOpen} onOpenChange={setConfigOpen}>
              <CollapsibleTrigger asChild>
                <button
                  className={cn(
                    "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    location.pathname.includes("/dashboard/settings")
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Settings size={18} /> {!collapsed && "Configuración"}
                  </div>
                  {!collapsed &&
                    (configOpen ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    ))}
                </button>
              </CollapsibleTrigger>
              {!collapsed && (
                <CollapsibleContent className="space-y-1 pl-9 pt-1">
                  <Link
                    to="/dashboard/settings/profile"
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      isActive("/dashboard/settings/profile")
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    <User size={16} /> Perfil
                  </Link>
                  <Link
                    to="/dashboard/settings/help"
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      isActive("/dashboard/settings/help")
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    <HelpCircle size={16} /> Ayuda
                  </Link>
                </CollapsibleContent>
              )}
            </Collapsible>
          </nav>

          <div className="border-t p-4">
            <Button variant="outline" className="w-full" onClick={logout}>
              <LogOut size={16} className="mr-2" />{" "}
              {!collapsed && "Cerrar sesión"}
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
