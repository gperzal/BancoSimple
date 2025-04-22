// src/modules/dashboard/common/components/Header.tsx
import {
  LayoutDashboard,
  Contact,
  Repeat,
  History,
  CreditCard,
  BarChart2,
  LogOut,
  X,
  ChevronsLeft,
  ChevronsRight,
  Users,
  ShieldAlert,
  UserCheck,
  Package,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const { auth, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const roles = auth?.roles ?? [];
  const isAdmin = roles.includes("ADMIN");
  const isExecutive = roles.includes("EXECUTIVE");
  const isClient = roles.includes("CLIENT");
  const isPremium = roles.includes("PREMIUM");

  const isActive = (path: string) => location.pathname === path;


  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 md:hidden bg-black/50 backdrop-blur-sm z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 transform border-r transition-all duration-300 ease-in-out md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          collapsed ? "w-20" : "w-72",
          "bg-[var(--sidebar-bg)] border-[var(--sidebar-border)]"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4">
            <Link
              to="/"
              className="flex items-center text-xl font-bold text-white truncate"
            >
              {collapsed ? (
                <img src="/iconow.svg" alt="BS" className="h-8 w-8" />
              ) : (
                <img src="/logow.svg" alt="BancoSimple" className="h-8 mr-2" />
              )}
            </Link>

            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCollapsed(!collapsed)}
                aria-label="Colapsar menú"
                className="text-white hover:bg-white/10"
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
                onClick={onClose}
                aria-label="Cerrar menú"
                className="md:hidden text-white hover:bg-white/10"
              >
                <X size={20} />
              </Button>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {(isAdmin || isClient) && (
              <>
                <SidebarLink
                  to="/dashboard"
                  icon={LayoutDashboard}
                  text="Inicio"
                  collapsed={collapsed}
                  active={isActive("/dashboard")}
                />
                <SidebarLink
                  to="/dashboard/contacts"
                  icon={Contact}
                  text="Contactos"
                  collapsed={collapsed}
                  active={isActive("/dashboard/contacts")}
                />
                <SidebarLink
                  to="/dashboard/transactions"
                  icon={Repeat}
                  text="Transferencias"
                  collapsed={collapsed}
                  active={isActive("/dashboard/transactions")}
                />
                <SidebarLink
                  to="/dashboard/history"
                  icon={History}
                  text="Historial"
                  collapsed={collapsed}
                  active={isActive("/dashboard/history")}
                />
                <SidebarLink
                  to="/dashboard/cards"
                  icon={CreditCard}
                  text="Tarjetas"
                  collapsed={collapsed}
                  active={isActive("/dashboard/cards")}
                />
                <SidebarLink
                  to="/dashboard/products"
                  icon={Package}
                  text="Productos"
                  collapsed={collapsed}
                  active={isActive("/dashboard/products")}
                />
                <SidebarLink
                  to="/dashboard/analytics"
                  icon={BarChart2}
                  text="Analítica"
                  collapsed={collapsed}
                  active={isActive("/dashboard/analytics")}
                />
              </>
            )}

            {isPremium && (
              <SidebarLink
                to="/dashboard/premium"
                icon={ShieldAlert}
                text="Beneficios Premium"
                collapsed={collapsed}
                active={isActive("/dashboard/premium")}
              />
            )}

            {(isAdmin || isExecutive) && (
              <SidebarLink
                to="/dashboard/executive"
                icon={UserCheck}
                text="Atención al Cliente"
                collapsed={collapsed}
                active={isActive("/dashboard/executive")}
              />
            )}

            {isAdmin && (
              <>
                <SidebarLink
                  to="/dashboard/admin"
                  icon={ShieldAlert}
                  text="Administración"
                  collapsed={collapsed}
                  active={isActive("/dashboard/admin")}
                />
                <SidebarLink
                  to="/dashboard/admin/role"
                  icon={Users}
                  text="Roles"
                  collapsed={collapsed}
                  active={isActive("/dashboard/admin/role")}
                />
              </>
            )}
          </nav>

          {/* Logout */}
          <div className="border-t border-white/20 p-4">
            <SidebarLogoutButton collapsed={collapsed} onLogout={logout} />
          </div>
        </div>
      </aside>
    </>
  );
}

function SidebarLink({
  to,
  icon: Icon,
  text,
  collapsed,
  active,
}: {
  to: string;
  icon: React.ElementType;
  text: string;
  collapsed: boolean;
  active: boolean;
}) {
  const base = cn(
    "border border-transparent border-white/30 bg-transparent text-white hover:bg-white hover:text-primary transition-colors font-medium",
    collapsed
      ? "w-10 h-10 flex items-center justify-center rounded-full"
      : "w-full px-3 py-2.5 flex items-center gap-2 rounded-xl",
    active && "!bg-white !text-primary"
  );

  const content = (
    <Link to={to} className={base}>
      <Icon size={18} />
      {!collapsed && text}
    </Link>
  );

  if (collapsed) {
    return (
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>{content}</TooltipTrigger>
          <TooltipContent
            side="right"
            className="text-sm font-medium text-white"
          >
            {text}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
  return content;
}

function SidebarLogoutButton({
  collapsed,
  onLogout,
}: {
  collapsed: boolean;
  onLogout: () => void;
}) {
  const base = cn(
    "border border-transparent border-white/30 bg-transparent text-white hover:bg-white hover:text-primary transition-colors font-medium",
    collapsed
      ? "w-10 h-10 flex items-center justify-center rounded-full"
      : "w-full px-3 py-2.5 flex items-center gap-2 rounded-xl"
  );

  return (
    <button onClick={onLogout} className={base}>
      <LogOut size={16} />
      {!collapsed && "Cerrar sesión"}
    </button>
  );
}
