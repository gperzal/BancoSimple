"use client"

import { motion } from "framer-motion"
import { CreditCard, Smartphone, Globe, Shield, Zap, DollarSign, Gift, Clock } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

const features = [
  {
    icon: CreditCard,
    title: "Tarjeta de débito internacional",
    description: "Realiza compras en cualquier parte del mundo sin comisiones adicionales.",
  },
  {
    icon: Smartphone,
    title: "App móvil intuitiva",
    description: "Gestiona tu cuenta desde cualquier lugar con nuestra aplicación fácil de usar.",
  },
  {
    icon: Globe,
    title: "Transferencias internacionales",
    description: "Envía y recibe dinero desde el extranjero con las mejores tasas.",
  },
  {
    icon: Shield,
    title: "Seguridad avanzada",
    description: "Protección biométrica y notificaciones en tiempo real para cada operación.",
  },
  {
    icon: Zap,
    title: "Pagos instantáneos",
    description: "Transferencias inmediatas 24/7 a cualquier banco sin costo adicional.",
  },
  {
    icon: DollarSign,
    title: "Sin comisiones",
    description: "Olvídate de los costos de mantención y administración de tu cuenta.",
  },
  {
    icon: Gift,
    title: "Programa de recompensas",
    description: "Acumula puntos con cada compra y canjéalos por increíbles beneficios.",
  },
  {
    icon: Clock,
    title: "Atención 24/7",
    description: "Soporte disponible todos los días del año para resolver tus dudas.",
  },
]

const AccountFeatures = () => {
  const { theme } = useTheme()

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
            Todo lo que necesitas en una cuenta
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Disfruta de beneficios exclusivos diseñados para simplificar tu vida financiera
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-6 rounded-xl border ${
                theme === "dark"
                  ? "border-gray-800 hover:border-gray-700 bg-gray-800/50"
                  : "border-gray-100 hover:border-gray-200 bg-gray-50"
              } hover:shadow-md transition-all`}
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <feature.icon className="text-green-600" size={24} />
              </div>

              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AccountFeatures
