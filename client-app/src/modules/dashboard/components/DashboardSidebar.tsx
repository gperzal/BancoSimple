"use client";

import { Link, useLocation } from "react-router-dom";
import { X, LayoutDashboard, Send, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const DashboardSidebar = ({ isOpen, onClose }: DashboardSidebarProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  const navItems = [
    {
      name: "Inicio",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Transacciones",
      path: "/transactions",
      icon: <Send size={20} />,
    },
    {
      name: "Configuración",
      path: "/settings/profile",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar header */}
          <div className="flex items-center justify-between border-b p-4">
            <Link
              to="/dashboard"
              className="text-xl font-bold text-resolution-blue-700"
            >
              BancoSimple
            </Link>
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

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 text-sm font-medium",
                  isActive(item.path)
                    ? "bg-resolution-blue-50 text-resolution-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                )}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    onClose();
                  }
                }}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
