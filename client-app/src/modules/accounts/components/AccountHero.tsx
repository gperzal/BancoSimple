"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Zap, CreditCard } from "lucide-react"
import { Button } from "@shadcn/button"
import { Link } from "react-router-dom"
import { useTheme } from "@/context/ThemeContext"

const AccountHero = () => {
  const { theme } = useTheme()

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Fondo con gradiente */}
      <div
        className={`absolute inset-0 z-0 ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-green-50 via-blue-50 to-purple-50"
        }`}
      >
        {/* Elementos decorativos */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-green-400 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-blue-400 opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Tu cuenta bancaria <span className="text-green-500">sin comisiones</span> y con todos los beneficios
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Disfruta de una cuenta 100% digital, sin costos de mantención y con acceso a todos nuestros servicios
              desde cualquier lugar.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <Shield className="text-green-500" size={20} />
                <span className="text-sm">Seguridad garantizada</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <Zap className="text-green-500" size={20} />
                <span className="text-sm">Transferencias instantáneas</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <CreditCard className="text-green-500" size={20} />
                <span className="text-sm">Tarjeta internacional</span>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-8" asChild>
                <Link to="/register">
                  Abrir cuenta gratis <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-xl px-8 border-green-600 text-green-600 hover:bg-green-50"
                asChild
              >
                <Link to="#comparativa">Comparar cuentas</Link>
              </Button>
            </div>
          </motion.div>

          {/* Imagen/Ilustración */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Cuenta BancoSimple"
                className="rounded-2xl shadow-2xl max-w-full w-[500px] object-cover"
              />

              {/* Tarjeta flotante */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className={`absolute -bottom-10 -left-10 p-4 rounded-xl shadow-lg w-64 ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CreditCard className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Tarjeta de Débito</h3>
                    <p className="text-xs text-muted-foreground">Internacional</p>
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full mb-2">
                  <div className="h-2 bg-green-500 rounded-full w-3/4"></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Límite diario</span>
                  <span className="font-medium">$1.500.000</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AccountHero
