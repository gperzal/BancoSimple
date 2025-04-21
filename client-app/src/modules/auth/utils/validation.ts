import { z } from "zod";  

export const loginSchema = z.object({
    email: z
      .string()
      .nonempty("El correo es obligatorio")
      .email("Formato de correo inválido"),
    password: z
      .string()
      .nonempty("La contraseña es obligatoria")
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
  });
  
  export type LoginInput = z.infer<typeof loginSchema>;

  const documentTypes = [
    "RUT",
    "DNI",
    "NIE",
    "PASAPORTE",
    "CI",
    "LE",
    "LC",
    "CEDULA",
    "CPF",
    "RG",
  ] as const;
  
  export const registerSchema = z.object({
    firstName: z.string().nonempty("El nombre es obligatorio"),
    lastName:  z.string().nonempty("El apellido es obligatorio"),
    documentType: z.enum(documentTypes, {
      errorMap: () => ({ message: "Selecciona un tipo de documento válido" }),
    }),
    documentNumber: z.string().nonempty("El número de documento es obligatorio"),
    birthDate:       z.string().nonempty("La fecha de nacimiento es obligatoria"),
    phone: z
      .string()
      .nonempty("El teléfono es obligatorio")
      .regex(/^\+56\d{9}$/, "Debe ser +56XXXXXXXXX"),
    email:    z.string().nonempty("El email es obligatorio").email("Formato inválido"),
    passwordHash: z
      .string()
      .nonempty("La contraseña es obligatoria")
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
      acceptTerms: z
      .boolean()
      .refine((v) => v === true, {
        message: "Debes aceptar los términos y condiciones",
      }),
  });
  export type RegisterInput = z.infer<typeof registerSchema>;