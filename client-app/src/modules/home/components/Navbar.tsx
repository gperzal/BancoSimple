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
    <nav className="navbar py-4 text-foreground">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-xl font-bold text-primary"
        >
          <img src={Logo} alt="BancoSimple" className="h-8" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
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
              className="font-medium text-base md:text-lg hover:text-primary"
            >
              {link.text}
            </Link>
          ))}

          {/* Botón para cambiar el tema */}
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

          {/* Botones de sesión */}
          <Button
            asChild
            className="button-outline hidden md:inline-flex text-lg"
          >
            <Link to="/login">Iniciar Sesión</Link>
          </Button>
          <Button asChild className="button hidden md:inline-flex text-lg">
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

        {isMenuOpen && (
          <div
            className="absolute left-0 top-16 z-50 w-full p-4 shadow-lg md:hidden"
            style={{
              backgroundColor:
                theme === "dark"
                  ? "var(--color-background-dark)"
                  : "var(--color-background-light)",
            }}
          >
            {/* Encabezado del menú con botón de cambio de tema alineado a la derecha */}
            <div
              className="flex justify-between items-center border-b pb-2 mb-4"
              style={{
                borderColor:
                  theme === "dark"
                    ? "var(--color-border-dark)"
                    : "var(--color-border-light)",
              }}
            >
              <span
                className="text-sm font-medium"
                style={{
                  color:
                    theme === "dark"
                      ? "var(--color-foreground-dark)"
                      : "var(--color-foreground-light)",
                }}
              >
                Menú
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label={
                  theme === "dark"
                    ? "Cambiar a modo claro"
                    : "Cambiar a modo oscuro"
                }
                style={{
                  color:
                    theme === "dark"
                      ? "var(--color-foreground-dark)"
                      : "var(--color-foreground-light)",
                }}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>

            {/* Enlaces del menú */}
            <div className="flex flex-col space-y-4">
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
                  style={{
                    color:
                      theme === "dark"
                        ? "var(--color-foreground-dark)"
                        : "var(--color-foreground-light)",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}

              {/* Botones de sesión */}
              <Button
                asChild
                className="button-outline w-full"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                }}
              >
                <Link to="/login">Iniciar Sesión</Link>
              </Button>
              <Button asChild className="button w-full">
                <Link to="/register">Registrarse</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
