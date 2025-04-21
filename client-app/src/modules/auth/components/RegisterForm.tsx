// src/modules/auth/components/RegisterForm.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
} from "@/components/ui/card";
import { toast } from "sonner";

import { useRegister } from "../hooks/useRegister";
import { registerSchema, RegisterInput } from "../utils/validation";
import { TermsModal } from "./TermsModal";

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const registerUser = useRegister();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });
  const accepted = watch("acceptTerms", false);

  const onSubmit = async (data: RegisterInput) => {
    try {
      await registerUser(data);
      toast.success("¡Registro exitoso!", {
        description: "Ya puedes iniciar sesión.",
      });
      navigate("/login");
    } catch {
      toast.error("No se pudo crear la cuenta. Intenta de nuevo.");
    }
  };

  const handleAccept = () => {
    setValue("acceptTerms", true, { shouldValidate: true });
    setModalOpen(false);
  };

  return (
    <>
      <TermsModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onAccept={handleAccept}
      />

      <Card className="card-auth">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-primary font-bold">
            Crear Cuenta
          </CardTitle>
          <CardDescription>
            Regístrate para comenzar a usar BancoSimple
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            {/* Nombres / Apellidos */}
            <div className="grid grid-cols-2 gap-4">
              {["firstName", "lastName"].map((field, idx) => (
                <div key={field} className="space-y-1">
                  <Label htmlFor={field} className="flex items-center gap-2">
                    <FaUser className="text-gray-400" />
                    {idx === 0 ? "Nombres" : "Apellidos"}
                  </Label>
                  <Input
                    id={field}
                    placeholder={idx === 0 ? "Tus nombres" : "Tus apellidos"}
                    className={`input-primary ${
                      errors[field as keyof RegisterInput]
                        ? "border-red-500"
                        : ""
                    }`}
                    {...register(field as keyof RegisterInput)}
                  />
                  {errors[field as keyof RegisterInput] && (
                    <p className="text-sm text-red-600">
                      {errors[field as keyof RegisterInput]?.message}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Documento Tipo / Número */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="documentType" className="text-sm">
                  Tipo de Documento
                </Label>
                <select
                  id="documentType"
                  className="select-primary"
                  {...register("documentType")}
                >
                  <option value="">Selecciona...</option>
                  {registerSchema.shape.documentType.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.documentType && (
                  <p className="text-sm text-red-600">
                    {errors.documentType.message}
                  </p>
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="documentNumber" className="text-sm">
                  Número de Documento
                </Label>
                <Input
                  id="documentNumber"
                  placeholder="12345678"
                  className={`input-primary ${
                    errors.documentNumber ? "border-red-500" : ""
                  }`}
                  {...register("documentNumber")}
                />
                {errors.documentNumber && (
                  <p className="text-sm text-red-600">
                    {errors.documentNumber.message}
                  </p>
                )}
              </div>
            </div>

            {/* Fecha de Nacimiento / Teléfono */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="birthDate" className="text-sm">
                  Fecha de Nacimiento
                </Label>
                <Input
                  id="birthDate"
                  type="date"
                  className={`input-primary ${
                    errors.birthDate ? "border-red-500" : ""
                  }`}
                  {...register("birthDate")}
                />
                {errors.birthDate && (
                  <p className="text-sm text-red-600">
                    {errors.birthDate.message}
                  </p>
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <FaPhone className="text-gray-400" />
                  Teléfono
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+56998877123"
                  className={`input-primary ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
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

            {/* Contraseña */}
            <div className="space-y-1">
              <Label htmlFor="passwordHash" className="flex items-center gap-2">
                <FaLock className="text-gray-400" />
                Contraseña
              </Label>
              <div className="input-password-wrapper">
                <Input
                  id="passwordHash"
                  type={showPassword ? "text" : "password"}
                  placeholder="*****"
                  className={`input-primary pr-10 ${
                    errors.passwordHash ? "border-red-500" : ""
                  }`}
                  {...register("passwordHash")}
                />
                <button
                  type="button"
                  className="input-password-toggle"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Ocultar" : "Mostrar"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.passwordHash && (
                <p className="text-sm text-red-600">
                  {errors.passwordHash.message}
                </p>
              )}
            </div>

            {/* Términos */}
            <div className="flex items-center space-x-2">
              <input
                id="acceptTerms"
                type="checkbox"
                {...register("acceptTerms")}
                className="checkbox-primary"
              />
              <Label htmlFor="acceptTerms" className="text-sm">
                Acepto los{" "}
                <button
                  type="button"
                  className="text-primary hover:underline"
                  onClick={() => setModalOpen(true)}
                >
                  términos y condiciones
                </button>
              </Label>
            </div>
            {errors.acceptTerms && (
              <p className="text-sm text-red-600">
                {errors.acceptTerms.message}
              </p>
            )}

            {/* Saldo inicial */}
            <div className="rounded-md bg-white/20 dark:bg-white/10 p-3 text-sm">
              Tu cuenta tendrá un saldo inicial de <strong>$1000</strong>
            </div>

            {/* Botón de registro, ahora dependiente de `accepted` */}
            <Button
              type="submit"
              disabled={!accepted || isSubmitting}
              className={`button-primary ${
                !accepted || isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Creando cuenta..." : "Registrarse"}
              <FaArrowRight className="ml-2" />
            </Button>

            {/* Separador y Google Login */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300 dark:border-gray-700" />
              </div>
              <span className="relative px-3 text-sm font-semibold bg-white/70 dark:bg-gray-900/70 text-gray-600 dark:text-gray-400">
                O regístrate con
              </span>
            </div>
            <Button className="button-outline group">
              <FaGoogle className="mr-2 text-red-500 group-hover:text-white transition" />
              Iniciar sesión con Google
            </Button>

            {/* Link a login */}
            <p className="text-center text-sm">
              ¿Ya tienes una cuenta?{" "}
              <Link
                to="/login"
                className="font-medium text-primary hover:underline"
              >
                Inicia sesión
              </Link>
            </p>
          </CardContent>
        </form>
      </Card>
    </>
  );
};

export default RegisterForm;

//
