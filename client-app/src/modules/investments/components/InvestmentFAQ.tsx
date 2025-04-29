"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

export default function InvestmentFAQ() {
  const { theme } = useTheme()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Cuál es la inversión mínima para comenzar?",
      answer:
        "La inversión mínima varía según el instrumento. Para fondos mutuos y depósitos a plazo, puedes comenzar desde $100.000. Para acciones y ETFs, el monto mínimo depende del precio del instrumento, pero generalmente puedes empezar con $100.000 aproximadamente.",
    },
    {
      question: "¿Cómo puedo saber qué inversión es adecuada para mí?",
      answer:
        "Al registrarte, completarás un cuestionario que nos permitirá determinar tu perfil de inversionista, considerando factores como tu horizonte de inversión, objetivos financieros y tolerancia al riesgo. Con base en esto, te recomendaremos las opciones más adecuadas para ti.",
    },
    {
      question: "¿Puedo retirar mi dinero en cualquier momento?",
      answer:
        "Depende del instrumento. Los fondos mutuos generalmente permiten retiros en cualquier momento (liquidez en 24-48 horas). Los depósitos a plazo tienen fechas de vencimiento específicas, aunque es posible rescatarlos anticipadamente con una penalización en la tasa. Las acciones y ETFs pueden venderse durante el horario de mercado.",
    },
    {
      question: "¿Qué comisiones cobran por las inversiones?",
      answer:
        "Las comisiones varían según el producto. Los fondos mutuos tienen una comisión anual de administración entre 1% y 3% dependiendo del fondo. Los depósitos a plazo no tienen comisiones. Para acciones, cobramos una comisión de 0.5% por operación con un mínimo de $2.000.",
    },
    {
      question: "¿Mis inversiones están seguras?",
      answer:
        "Sí, todas nuestras operaciones están reguladas por la Comisión para el Mercado Financiero (CMF). Además, los fondos mutuos y depósitos están respaldados por instituciones financieras de primer nivel. Para mayor seguridad, implementamos medidas de protección como autenticación de dos factores y encriptación de datos.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Preguntas frecuentes</h2>
          <p className="text-xl text-muted-foreground">Resolvemos tus dudas sobre nuestras opciones de inversión.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-4 rounded-lg border ${
                theme === "dark" ? "border-gray-700" : "border-gray-200"
              } overflow-hidden`}
            >
              <button
                className={`w-full p-6 text-left flex justify-between items-center ${
                  openIndex === index
                    ? "bg-green-500/10 text-green-600 dark:text-green-400"
                    : theme === "dark"
                      ? "bg-gray-800"
                      : "bg-white"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${openIndex === index ? "transform rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`overflow-hidden ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
                  >
                    <div className="p-6 pt-0 text-muted-foreground">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
