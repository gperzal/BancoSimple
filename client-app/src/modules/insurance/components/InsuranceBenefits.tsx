"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Shield, Clock, Headphones, CreditCard, Smartphone, FileText } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

export default function InsuranceBenefits() {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const benefits = [
    {
      icon: Shield,
      title: "Coberturas completas",
      description: "Protección integral para todas tus necesidades con coberturas amplias y flexibles.",
    },
    {
      icon: Clock,
      title: "Respuesta rápida",
      description: "Gestión de siniestros ágil y eficiente para que recibas ayuda cuando más lo necesitas.",
    },
    {
      icon: Headphones,
      title: "Asistencia 24/7",
      description: "Soporte y asistencia disponible todos los días del año, a cualquier hora.",
    },
    {
      icon: CreditCard,
      title: "Pagos flexibles",
      description: "Opciones de pago adaptadas a tu presupuesto, sin recargos adicionales.",
    },
    {
      icon: Smartphone,
      title: "App móvil",
      description: "Gestiona tu seguro, reporta siniestros y solicita asistencia desde tu smartphone.",
    },
    {
      icon: FileText,
      title: "Documentación digital",
      description: "Accede a toda tu documentación en formato digital, sin papeleos innecesarios.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
          <h2 className="text-3xl font-bold mb-4">Beneficios de nuestros seguros</h2>
          <p className="text-xl text-muted-foreground">
            Descubre por qué miles de personas confían en nosotros para proteger lo que más valoran.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`p-6 rounded-xl ${
                theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"
              } shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700`}
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
