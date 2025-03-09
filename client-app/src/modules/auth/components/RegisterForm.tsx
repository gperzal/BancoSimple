import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
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
  CardFooter,
} from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

const RegisterForm = ({ theme }: { theme: string }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptTerms) {
      toast.error("Debes aceptar los términos y condiciones para continuar.");
      return;
    }

    setIsLoading(true);

    try {
      await register(name, email, phone, password);
      toast.success(
        "¡Registro exitoso! Tu cuenta ha sido creada con un saldo inicial de $1000."
      );
      navigate("/dashboard");
    } catch (error) {
      toast.error("No se pudo crear la cuenta. Por favor, inténtalo de nuevo.");
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
          Crear Cuenta
        </CardTitle>
        <CardDescription>
          Regístrate para comenzar a usar BancoSimple
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-5">
          {/* Nombre Completo */}
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <FaUser className="text-gray-400" />
              Nombre Completo
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Tu nombre"
              className="
                border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400
                focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]
                transition-colors
              "
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Correo Electrónico */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <FaEnvelope className="text-gray-400" />
              Correo Electrónico
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tucorreo@example.cl"
              className="
                border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400
                focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]
                transition-colors
              "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Teléfono */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <FaPhone className="text-gray-400" />
              Teléfono
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+56998877123"
              className="
                border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400
                focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]
                transition-colors
              "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Contraseña */}
          <div className="space-y-2">
            <Label htmlFor="password" className="flex items-center gap-2">
              <FaLock className="text-gray-400" />
              Contraseña
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className="
                  border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400
                  focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]
                  transition-colors pr-10
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

          {/* Términos y Condiciones */}
          <div className="flex items-center space-x-2">
            <input
              id="terms"
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="h-4 w-4"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              Acepto los{" "}
              <Link to="/terminos" className="text-primary hover:underline">
                términos y condiciones
              </Link>
            </label>
          </div>

          {/* Mensaje de saldo inicial */}
          <div className="rounded-md bg-resolution-blue-50 p-3 text-sm text-resolution-blue-700">
            Tu cuenta tendrá un saldo inicial de $1000
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
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

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <span className="relative px-3 text-sm font-semibold text-gray-600">
              O regístrate con
            </span>
          </div>

          <Button variant="outline" className="w-full" type="button">
            <FaGoogle className="mr-2 text-red-500" />
            Continuar con Google
          </Button>

          <p className="text-center text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link
              to="/login"
              className="font-medium text-primary hover:underline"
            >
              Inicia sesión
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};

export default RegisterForm;
