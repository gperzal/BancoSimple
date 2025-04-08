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

const RegisterForm = () => {
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
    <Card className="card-auth">
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
          {/* Nombre */}
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <FaUser className="text-gray-400" />
              Nombre Completo
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Tu nombre"
              className="input-primary"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
              className="input-primary"
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
              className="input-primary"
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
            <div className="input-password-wrapper">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className="input-primary pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="input-password-toggle"
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

          {/* Términos */}
          <div className="flex items-center space-x-2">
            <input
              id="terms"
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="h-4 w-4"
              required
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              Acepto los{" "}
              <Link to="/terminos" className="text-primary hover:underline">
                términos y condiciones
              </Link>
            </label>
          </div>

          <div className="rounded-md bg-white/20 dark:bg-white/10 p-3 text-sm">
            Tu cuenta tendrá un saldo inicial de <strong>$1000</strong>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <Button
            type="submit"
            disabled={isLoading}
            className={`button-primary ${isLoading ? "opacity-75" : ""}`}
          >
            {isLoading ? "Creando cuenta..." : "Registrarse"}
            <FaArrowRight />
          </Button>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300 dark:border-gray-700" />
            </div>
            <span className="relative px-3 text-sm font-semibold bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
              O regístrate con
            </span>
          </div>

          {/* Google */}
          <Button className="button-outline group">
            <FaGoogle className="mr-2 text-red-500 group-hover:text-white transition" />
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
