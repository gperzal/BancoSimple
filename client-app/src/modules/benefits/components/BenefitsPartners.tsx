"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "@/context/ThemeContext"

export default function BenefitsPartners() {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const partners = [
    {
      name: "EcoMarket",
      logo: "/placeholder.svg?height=100&width=200",
      category: "Retail",
    },
    {
      name: "TechStore",
      logo: "/placeholder.svg?height=100&width=200",
      category: "Tecnología",
    },
    {
      name: "FashionNow",
      logo: "/placeholder.svg?height=100&width=200",
      category: "Moda",
    },
    {
      name: "Sushi Express",
      logo: "/placeholder.svg?height=100&width=200",
      category: "Restaurantes",
    },
    {
      name: "Burger Gourmet",
      logo: "/placeholder.svg?height=100&width=200",
      category: "Restaurantes",
    },
    {
      name: "AeroViajes",
      logo: "/placeholder.svg?height=100&width=200",
      category: "Viajes",
    },
    {
      name: "HotelPlus",
      logo: "/placeholder.svg?height=100&width=200",
      category: "Hospedaje",
    },
    {
      name: "CinePlus",
      logo: "/placeholder.svg?height=100&width=200",
      category: "Entretenimiento",
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
          <h2 className="text-3xl font-bold mb-4">Nuestros aliados</h2>
          <p className="text-xl text-muted-foreground">
            Contamos con más de 500 marcas asociadas para ofrecerte los mejores beneficios.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`p-6 rounded-xl ${
                theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"
              } shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center`}
            >
              <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-12 object-contain mb-4" />
              <h3 className="text-lg font-semibold mb-1">{partner.name}</h3>
              <p className="text-sm text-muted-foreground">{partner.category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
