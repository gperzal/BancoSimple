"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

// Definir la estructura de las preguntas frecuentes
interface FAQItem {
  question: string
  answer: string
}

const AccountFAQ = () => {
  const { theme } = useTheme()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // Lista de preguntas frecuentes
  const faqItems: FAQItem[] = [
    {
      question: "¿Cómo puedo abrir una cuenta en BancoSimple?",
      answer:
        "Abrir una cuenta es muy sencillo. Solo necesitas completar el formulario en nuestra web o app, adjuntar una foto de tu documento de identidad y realizar una videollamada de verificación. El proceso completo toma menos de 5 minutos y recibirás tu tarjeta en un plazo de 3 a 5 días hábiles.",
    },
    {
      question: "¿Realmente no hay comisiones por mantención?",
      answer:
        "Así es. En BancoSimple no cobramos comisión de mantención en nuestra cuenta básica. Creemos que tu dinero debe ser tuyo y no gastarse en costos administrativos. Nuestros planes Plus y Premium tienen costos mensuales, pero incluyen beneficios adicionales que compensan ampliamente este valor.",
    },
    {
      question: "¿Cuántas transferencias puedo realizar al mes?",
      answer:
        "Puedes realizar transferencias ilimitadas a cualquier banco del país sin costo adicional. Para transferencias internacionales, los planes Plus y Premium incluyen un número determinado de operaciones sin comisión.",
    },
    {
      question: "¿Qué pasa si pierdo mi tarjeta?",
      answer:
        "Si pierdes tu tarjeta, puedes bloquearla inmediatamente desde la app o sitio web. Luego, puedes solicitar una nueva tarjeta que llegará a tu domicilio en un plazo de 3 a 5 días hábiles. Mientras tanto, puedes generar una tarjeta virtual para seguir realizando compras online.",
    },
    {
      question: "¿Cómo funciona el programa de beneficios?",
      answer:
        "Nuestro programa de beneficios te permite acumular puntos con cada compra que realices con tu tarjeta. Estos puntos pueden ser canjeados por descuentos en comercios asociados, millas de viaje, o incluso efectivo que se abona directamente a tu cuenta. Los clientes de planes Plus y Premium acumulan puntos a una tasa mayor.",
    },
    {
      question: "¿Puedo usar mi tarjeta en el extranjero?",
      answer:
        "Sí, todas nuestras tarjetas funcionan internacionalmente. Para compras en el extranjero, aplicamos la tasa de cambio del día sin comisiones ocultas. Los planes Plus y Premium incluyen además seguros de viaje y asistencia internacional.",
    },
  ]

  // Función para manejar la apertura/cierre de las preguntas
  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Preguntas frecuentes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Resolvemos tus dudas sobre nuestras cuentas bancarias
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`mb-4 overflow-hidden rounded-lg border ${
                theme === "dark" ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className={`flex w-full items-center justify-between p-5 text-left font-medium ${
                  openIndex === index
                    ? theme === "dark"
                      ? "bg-gray-800"
                      : "bg-gray-50"
                    : theme === "dark"
                      ? "bg-gray-800/50"
                      : "bg-white"
                }`}
              >
                <span>{item.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-primary" />
                ) : (
                  <Plus className="h-5 w-5 text-primary" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className={`p-5 ${theme === "dark" ? "bg-gray-800/30" : "bg-gray-50"}`}>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            ¿No encuentras la respuesta que buscas?{" "}
            <a href="/contacto" className="text-primary hover:underline">
              Contáctanos
            </a>{" "}
            y te responderemos a la brevedad.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AccountFAQ
