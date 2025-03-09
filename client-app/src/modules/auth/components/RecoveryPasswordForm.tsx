import { useState } from "react";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { Button } from "@shadcn/button";
import { Input } from "@shadcn/input";
import { Label } from "@shadcn/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";

interface RecoveryPasswordFormProps {
  theme: string;
}

const RecoveryPasswordForm = ({ theme }: RecoveryPasswordFormProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simula la llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      toast.success("Correo enviado", {
        description:
          "Revisa tu bandeja de entrada para restablecer tu contraseña.",
      });
    } catch (error) {
      toast.error("Error", {
        description:
          "No se pudo enviar el correo. Por favor, inténtalo de nuevo.",
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
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <FaEnvelope className="text-gray-400" />
                Correo Electrónico
              </Label>
              <div className="relative mt-4 mb-4">
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="
                    pl-10 
                    border border-gray-300 
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
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 mt-4">
            <Button
              type="submit"
              disabled={isLoading}
              className={`button w-full flex items-center justify-center gap-2 ${
                isLoading ? "opacity-75" : ""
              }`}
            >
              {isLoading ? "Enviando..." : "Enviar Enlace de Recuperación"}
              <FaArrowRight />
            </Button>
          </CardFooter>
        </form>
      ) : (
        <CardContent className="space-y-4">
          <div className="rounded-md bg-green-50 p-4 text-green-700">
            <p className="text-center">
              Hemos enviado un enlace de recuperación a <strong>{email}</strong>
              . Por favor, revisa tu correo.
            </p>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default RecoveryPasswordForm;
