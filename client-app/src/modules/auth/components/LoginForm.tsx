import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaArrowRight,
} from "react-icons/fa";
import { Button } from "@shadcn/button";
import { Input } from "@shadcn/input";
import { Label } from "@shadcn/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

const LoginForm = ({ theme }: { theme: string }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password);
      toast.success("Inicio de sesión exitoso", {
        description: "Redirigiendo al panel de control...",
      });
      navigate("/dashboard");
    } catch (error) {
      toast.error("Error de inicio de sesión", {
        description: "Credenciales incorrectas. Por favor, inténtalo de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card
      className={`shadow-2xl border rounded-xl p-6 transition-all ${
        theme === "dark"
          ? "bg-gray-900 border-gray-700 text-white"
          : "bg-white border-gray-300 text-gray-900"
      }`}
    >
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-primary font-bold">
          Iniciar Sesión
        </CardTitle>
        <CardDescription>
          Ingresa tus credenciales para acceder a tu cuenta
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-5">
          {/* Correo Electrónico */}
          <div className="space-y-2">
            {/* Label con ícono */}
            <Label htmlFor="email" className="flex items-center gap-2">
              <FaEnvelope className="text-gray-400" />
              Correo Electrónico
            </Label>
            {/* Input sin ícono */}
            <Input
              id="email"
              type="email"
              placeholder="admin@x.cl"
              className="
                border 
                border-gray-300 
                rounded-md 
                text-gray-900 
                placeholder:text-gray-400
                focus:outline-none
                focus:ring-1 
                focus:ring-[var(--color-primary)]
                focus:border-[var(--color-primary)]
                transition-colors
              "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Contraseña */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="flex items-center gap-2">
                <FaLock className="text-gray-400" />
                Contraseña
              </Label>
              <Link
                to="/recover-password"
                className="text-xs text-primary hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                className="
                  border
                  border-gray-300
                  rounded-md
                  text-gray-900
                  placeholder:text-gray-400
                  focus:outline-none
                  focus:ring-1 
                  focus:ring-[var(--color-primary)]
                  focus:border-[var(--color-primary)]
                  transition-colors
                  pr-10
                "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                }
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5" />
                ) : (
                  <FaEye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Acciones */}
          <Button
            type="submit"
            disabled={isLoading}
            className={`button w-full flex items-center justify-center gap-2 ${
              isLoading ? "opacity-75" : ""
            }`}
          >
            {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
            <FaArrowRight />
          </Button>

          {/* Separador */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <span
                className={`w-full border-t ${
                  theme === "dark" ? "border-gray-700" : "border-gray-300"
                }`}
              />
            </div>
            <span
              className={`relative px-3 text-sm font-semibold ${
                theme === "dark"
                  ? "bg-gray-900 text-gray-400"
                  : "bg-white text-gray-600"
              }`}
            >
              O continúa con
            </span>
          </div>

          {/* Botón Google */}
          <Button className="w-full py-3 px-6 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-500 transition">
            <FaGoogle className="mr-2 text-red-500" />
            Iniciar sesión con Google
          </Button>

          <p className="text-center text-sm">
            ¿No tienes una cuenta?{" "}
            <Link
              to="/register"
              className="font-medium text-primary hover:underline"
            >
              Regístrate
            </Link>
          </p>
        </CardContent>
      </form>
    </Card>
  );
};

export default LoginForm;
