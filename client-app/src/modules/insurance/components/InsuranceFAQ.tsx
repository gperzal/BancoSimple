"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

export default function InsuranceFAQ() {
  const { theme } = useTheme()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Cómo puedo contratar un seguro?",
      answer:
        "Contratar un seguro es muy sencillo. Puedes hacerlo 100% online a través de nuestra plataforma o app móvil. Solo necesitas registrarte, seleccionar el tipo de seguro que necesitas, personalizar tus coberturas y realizar el pago. En minutos recibirás tu póliza por correo electrónico.",
    },
    {
      question: "¿Qué debo hacer en caso de siniestro?",
      answer:
        "En caso de siniestro, puedes reportarlo inmediatamente a través de nuestra app móvil, sitio web o llamando a nuestro centro de asistencia 24/7. Un asesor te guiará durante todo el proceso y te indicará la documentación necesaria según el tipo de siniestro. Nuestro objetivo es resolver tu caso de manera rápida y eficiente.",
    },
    {
      question: "¿Puedo modificar mis coberturas después de contratar?",
      answer:
        "Sí, puedes modificar tus coberturas en cualquier momento durante la vigencia de tu póliza. Simplemente accede a tu cuenta en nuestra plataforma o contacta a nuestro servicio al cliente. Los cambios se harán efectivos según las condiciones de tu póliza y podrían implicar ajustes en la prima.",
    },
    {
      question: "¿Cuáles son los métodos de pago disponibles?",
      answer:
        "Ofrecemos múltiples opciones de pago para tu comodidad: tarjetas de crédito y débito, transferencia bancaria, débito automático y pago en cuotas sin intereses (según el tipo de seguro). Puedes elegir la frecuencia de pago que mejor se adapte a tus necesidades: mensual, trimestral, semestral o anual.",
    },
    {
      question: "¿Cómo puedo obtener un descuento en mi seguro?",
      answer:
        "Ofrecemos diversos descuentos según tu perfil y comportamiento. Por ejemplo, descuentos por contratación online, por tener múltiples pólizas con nosotros, por buen historial de conducción (en seguros de auto), o por instalar sistemas de seguridad (en seguros de hogar). Consulta con nuestros asesores para conocer todos los descuentos disponibles para ti.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Preguntas frecuentes</h2>
          <p className="text-xl text-muted-foreground">Resolvemos tus dudas sobre nuestros seguros y servicios.</p>
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
                    ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
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
