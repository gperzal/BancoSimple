"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Headset, CreditCard, FileCheck, Award } from "lucide-react"

export default function InsuranceFeatures() {
  const features = [
    {
      icon: Shield,
      title: "Cobertura completa",
      description: "Protección integral para todos los aspectos importantes de tu vida y patrimonio.",
    },
    {
      icon: Clock,
      title: "Respuesta inmediata",
      description: "Asistencia en tiempo récord cuando más lo necesitas, disponible 24/7.",
    },
    {
      icon: Headset,
      title: "Atención personalizada",
      description: "Asesores especializados para ayudarte a elegir la mejor cobertura según tus necesidades.",
    },
    {
      icon: CreditCard,
      title: "Pago flexible",
      description: "Opciones de pago mensual, trimestral o anual con descuentos por pago anticipado.",
    },
    {
      icon: FileCheck,
      title: "Proceso simple",
      description: "Contratación y gestión de siniestros sin complicaciones y con mínimo papeleo.",
    },
    {
      icon: Award,
      title: "Calidad garantizada",
      description: "Trabajamos con las mejores aseguradoras para ofrecerte el mejor servicio.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">¿Por qué elegir nuestros seguros?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nos diferenciamos por ofrecer seguros que realmente responden cuando los necesitas, con un servicio que
            supera tus expectativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card p-6 hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
