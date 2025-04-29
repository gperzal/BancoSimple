"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { UserPlus, LineChart, DollarSign, TrendingUp } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

export default function InvestmentProcess() {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      icon: UserPlus,
      title: "Crea tu cuenta de inversión",
      description:
        "Regístrate en minutos y completa tu perfil de inversionista para recibir recomendaciones personalizadas.",
    },
    {
      icon: LineChart,
      title: "Selecciona tus inversiones",
      description:
        "Explora nuestras opciones y elige las que mejor se adapten a tus objetivos financieros y nivel de riesgo.",
    },
    {
      icon: DollarSign,
      title: "Realiza tu primera inversión",
      description: "Transfiere fondos a tu cuenta y comienza a invertir con montos desde $100.000.",
    },
    {
      icon: TrendingUp,
      title: "Monitorea tu portafolio",
      description: "Sigue el rendimiento de tus inversiones en tiempo real y recibe informes periódicos.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Comienza a invertir en 4 simples pasos</h2>
          <p className="text-xl text-muted-foreground">
            Nuestro proceso está diseñado para que puedas empezar a invertir de manera rápida y sencilla.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative p-6 rounded-xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } shadow-lg border border-gray-200 dark:border-gray-700`}
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              <div className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
