import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@shadcn/button";
import { useTheme } from "@/context/ThemeContext";
import Logo from "/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="navbar py-4 text-foreground">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-xl font-bold text-primary"
        >
          <img src={Logo} alt="BancoSimple" className="h-8 mr-2" />
        </Link>

        {/* Menú de escritorio */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { to: "/", text: "Inicio" },
            { to: "/#cuentas", text: "Cuentas" },
            { to: "/#inversiones", text: "Inversiones" },
            { to: "/#seguridad", text: "Seguros" },
            { to: "/#beneficios", text: "Beneficios" },
          ].map((link) => (
            <Link
              key={link.text}
              to={link.to}
              className="font-medium text-base md:text-lg hover:text-primary"
            >
              {link.text}
            </Link>
          ))}

          {/* Botón para cambiar el tema */}
          <button
            className="button-icon"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Cambiar a modo claro"
                : "Cambiar a modo oscuro"
            }
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Botones de sesión */}
          <Button
            asChild
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-2 text-base font-bold 
             border border-[var(--color-primary)] text-[var(--color-primary)] bg-white 
             hover:bg-[var(--color-primary)] hover:text-white transition-colors"
          >
            <Link to="/login">Iniciar Sesión</Link>
          </Button>

          <Button
            asChild
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-2 text-base font-bold 
             bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-darker)] 
             transition-colors"
          >
            <Link to="/register">Registrarse</Link>
          </Button>
        </div>

        {/* Botón de menú para móvil */}
        <button
          className="md:hidden button-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú móvil (Overlay) */}
        {isMenuOpen && (
          <div
            className="absolute left-0 top-16 z-50 w-full p-4 shadow-lg md:hidden 
                     bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all"
          >
            {/* Encabezado del menú: label “Menú” + botón de cambio de tema */}
            <div className="flex justify-between items-center border-b border-border pb-2 mb-4">
              <span className="text-sm font-medium">Menú</span>
              <button
                className="button-icon"
                onClick={toggleTheme}
                aria-label={
                  theme === "dark"
                    ? "Cambiar a modo claro"
                    : "Cambiar a modo oscuro"
                }
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Enlaces del menú */}
            <div className="flex flex-col space-y-4">
              {[
                { to: "/", text: "Inicio" },
                { to: "/#cuentas", text: "Cuentas" },
                { to: "/#inversiones", text: "Inversiones" },
                { to: "/#seguridad", text: "Seguros" },
                { to: "/#beneficios", text: "Beneficios" },
              ].map((link) => (
                <Link
                  key={link.text}
                  to={link.to}
                  className="text-sm font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}

              {/* Botones de sesión en móvil */}
              <Button
                asChild
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-2 text-base font-bold 
             border border-[var(--color-primary)] text-[var(--color-primary)] bg-white 
             hover:bg-[var(--color-primary)] hover:text-white transition-colors"
              >
                <Link to="/login">Iniciar Sesión</Link>
              </Button>

              <Button
                asChild
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-2 text-base font-bold 
             bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-darker)] 
             transition-colors"
              >
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
