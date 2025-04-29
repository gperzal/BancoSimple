"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function BenefitsFAQ() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Qué beneficios exclusivos ofrece Banco Simple?",
      answer:
        "Ofrecemos descuentos en comercios, promociones especiales, acceso a eventos VIP y cashback en compras seleccionadas para todos nuestros clientes.",
    },
    {
      question: "¿Cómo accedo a los descuentos y promociones?",
      answer:
        "Solo debes pagar con tu tarjeta Banco Simple en los comercios adheridos o presentar tu app en caja. Los beneficios se aplican automáticamente o mediante cupones digitales.",
    },
    {
      question: "¿Hay algún costo adicional por acceder a los beneficios?",
      answer:
        "No, todos los beneficios están incluidos sin costo extra para los clientes de Banco Simple. Solo necesitas tener una cuenta activa.",
    },
    {
      question: "¿Con qué frecuencia se actualizan los beneficios?",
      answer:
        "Los beneficios y promociones se actualizan mensualmente. Te recomendamos revisar la sección de beneficios en la app o web para no perderte ninguna novedad.",
    },
    {
      question: "¿Puedo compartir mis beneficios con familiares?",
      answer:
        "Los beneficios son personales e intransferibles, pero algunos eventos o promociones pueden permitir invitados. Consulta las bases de cada beneficio para más detalles.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Preguntas frecuentes</h2>
          <p className="text-xl text-muted-foreground">
            Resolvemos tus dudas sobre nuestros beneficios exclusivos.
          </p>
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
                    ? "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                    : theme === "dark"
                    ? "bg-gray-800"
                    : "bg-white"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`overflow-hidden ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <div className="p-6 pt-0 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
