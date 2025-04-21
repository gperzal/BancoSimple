import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

import { toast } from "sonner";
import { useLogin } from "../hooks/useLogin";
import { loginSchema, LoginInput } from "../utils/validation";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const login = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInput) => {
    try {
      const authResponse = await login(data.email, data.password);
      toast.success(`¡Bienvenido, ${authResponse.fullName}!`, {
        description: "Tu sesión ha comenzado con éxito.",
      });
      navigate("/dashboard");
    } catch {
      toast.error("Error en credenciales", {
        description: "Por favor, verifica tus credenciales.",
      });
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

      <form onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="tucorreo@example.cl"
              className={`input-primary ${
                errors.email ? "border-red-500" : ""
              }`}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
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
                placeholder="******"
                className={`input-primary pr-10 ${
                  errors.password ? "border-red-500" : ""
                }`}
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
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
            disabled={isSubmitting}
            className={`button-primary ${isSubmitting ? "opacity-75" : ""}`}
          >
            {isSubmitting ? "Iniciando sesión..." : "Iniciar Sesión"}
            <FaArrowRight className="ml-2" />
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
