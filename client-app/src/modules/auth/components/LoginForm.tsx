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

const LoginForm = () => {
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
      console.error("Error de inicio de sesión:", error);
      toast.error("Error de inicio de sesión", {
        description: "Credenciales incorrectas. Por favor, inténtalo de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="card-auth">
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
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <FaEnvelope className="text-gray-400" />
              Correo Electrónico
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@x.cl"
              className="input-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
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
                className="input-primary pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-400"
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

          {/* Botón principal */}
          <Button
            type="submit"
            disabled={isLoading}
            className={`button-primary ${isLoading ? "opacity-75" : ""}`}
          >
            {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
            <FaArrowRight />
          </Button>

          {/* Separador */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300 dark:border-gray-700" />
            </div>
            <span className="relative px-3 text-sm font-semibold bg-white/70 dark:bg-gray-900/70 text-gray-600 dark:text-gray-400">
              O continúa con
            </span>
          </div>

          {/* Google Login */}
          <Button className="button-outline group">
            <FaGoogle className="mr-2 text-red-500 group-hover:text-white transition" />
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
