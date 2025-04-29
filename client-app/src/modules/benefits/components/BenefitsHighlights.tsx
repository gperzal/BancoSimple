"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star, Clock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useTheme } from "@/context/ThemeContext"

export default function BenefitsHighlights() {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const highlights = [
    {
      title: "Descuentos Destacados",
      description: "Las mejores ofertas seleccionadas para ti",
      image: "/placeholder.svg?height=400&width=600",
      icon: Star,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      benefits: [
        "Hasta 40% en restaurantes seleccionados",
        "2x1 en entradas de cine todos los días",
        "25% en tiendas de moda y tecnología",
      ],
    },
    {
      title: "Ofertas por Tiempo Limitado",
      description: "Aprovecha estas promociones exclusivas antes de que expiren",
      image: "/placeholder.svg?height=400&width=600",
      icon: Clock,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      benefits: [
        "50% en hoteles de lujo (solo este mes)",
        "3x2 en pasajes aéreos nacionales",
        "Hasta 60% en productos seleccionados",
      ],
    },
    {
      title: "Beneficios Instantáneos",
      description: "Disfruta de estos beneficios sin esperas ni complicaciones",
      image: "/placeholder.svg?height=400&width=600",
      icon: Zap,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      benefits: [
        "Cashback inmediato en tus compras",
        "Acceso VIP a eventos exclusivos",
        "Descuentos aplicados automáticamente",
      ],
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Beneficios destacados</h2>
          <p className="text-xl text-muted-foreground">
            Descubre nuestras promociones más populares y exclusivas para clientes de Banco Simple.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl overflow-hidden border ${
                theme === "dark" ? "border-gray-700" : "border-gray-200"
              } shadow-lg hover:shadow-xl transition-all`}
            >
              <div className="relative">
                <img
                  src={highlight.image || "/placeholder.svg"}
                  alt={highlight.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 rounded-full p-2" style={{ backgroundColor: "white" }}>
                  <highlight.icon className={`h-6 w-6 ${highlight.color}`} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground mb-4">{highlight.description}</p>
                <ul className="space-y-2 mb-6">
                  {highlight.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <div className="rounded-full bg-purple-500/10 p-1 mr-2 mt-0.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                      </div>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full rounded-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Link to="/register">Ver todos</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
