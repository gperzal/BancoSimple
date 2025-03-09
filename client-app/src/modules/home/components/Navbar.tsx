import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@shadcn/button";
import { useTheme } from "@/context/ThemeContext";
import Logo from "/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="border-b bg-background py-4 text-foreground">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-xl font-bold text-primary"
        >
          <img src={Logo} alt="BancoSimple" className="h-8" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-6 md:flex">
          {[
            { to: "/", text: "Inicio" },
            { to: "/#cuentas", text: "Cuentas" },
            { to: "/#inversiones", text: "Inversiones" },
            { to: "/#seguridad", text: "Seguros" },
            { to: "/#beneficios", text: "Beneficios" },
          ].map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="text-sm font-medium hover:text-primary"
            >
              {link.text}
            </Link>
          ))}

          {/* Botón para cambiar el tema con indicador visual correcto */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={
              theme === "dark"
                ? "Cambiar a modo claro"
                : "Cambiar a modo oscuro"
            }
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </Button>

          <Button variant="outline" asChild>
            <Link to="/login">Iniciar Sesión</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Registrarse</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu (podría implementarse como un drawer o dropdown) */}
        {isMenuOpen && (
          <div className="absolute left-0 top-16 z-50 w-full bg-background p-4 shadow-lg md:hidden">
            <div className="flex flex-col space-y-4">
              {[
                { to: "/", text: "Inicio" },
                { to: "/#beneficios", text: "Beneficios" },
                { to: "/#seguridad", text: "Seguridad" },
                { to: "/#contacto", text: "Contacto" },
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="text-sm font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
              <Button variant="outline" asChild className="w-full">
                <Link to="/login">Iniciar Sesión</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/register">Registrarse</Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
