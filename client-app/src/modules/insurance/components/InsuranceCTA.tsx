"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ChevronRight, CheckCircle } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

export default function InsuranceCTA() {
  const { theme } = useTheme()

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Fondo con gradiente */}
      <div className={`absolute inset-0 ${theme === "dark" ? "bg-blue-900/20" : "bg-blue-50"}`} />

      {/* Círculos decorativos */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-400/20 filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-indigo-400/20 filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold mb-4">Protege lo que más valoras hoy mismo</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Únete a miles de personas que ya disfrutan de la tranquilidad que ofrecen nuestros seguros.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/register" className="flex items-center gap-2">
                  Cotizar ahora <ChevronRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="#" className="flex items-center gap-2">
                  Hablar con un asesor <ChevronRight size={18} />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {["Contratación 100% online", "Asistencia 24/7", "Coberturas personalizadas"].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
