"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  TrendingUp,
  BarChart,
  PieChart,
  Shield,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function InvestmentHero() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col">
      <section className="relative py-20 overflow-hidden">
        {/* Fondo con gradiente */}
        <div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-gradient-to-r from-green-900/20 to-green-800/5"
              : "bg-gradient-to-r from-green-50 to-blue-50"
          }`}
        >
          {/* Círculos decorativos */}
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-green-500/10 filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-blue-400/10 filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center text-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight ">
                Haz crecer tu dinero con{" "}
                <span className="text-green-600 dark:text-green-400">
                  inversiones inteligentes
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Descubre nuestras opciones de inversión diseñadas para cada
                perfil, con rendimientos competitivos y riesgos controlados.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <Link to="/register" className="flex items-center gap-2">
                    Comenzar a invertir <ChevronRight size={18} />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                >
                  <Link to="#opciones" className="flex items-center gap-2">
                    Explorar opciones <ChevronRight size={18} />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-6 justify-center lg:justify-start">
                {[
                  { icon: TrendingUp, text: "Rendimientos competitivos" },
                  { icon: BarChart, text: "Diversificación inteligente" },
                  { icon: PieChart, text: "Múltiples instrumentos" },
                  { icon: Shield, text: "Inversiones seguras" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <item.icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <img
                  src="https://assets.bancochile.cl/uploads/000/024/653/e232952b-7cf4-4145-bce6-d29a0e5f2486/original/columna-carolina-malas-buenas-noticias-min.jpg"
                  alt="Inversiones Banco Simple"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">
                      Plataforma de Inversiones
                    </h3>
                    <p className="text-white/80">
                      Gestiona tu portafolio con herramientas profesionales
                    </p>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-400 rounded-full opacity-70 blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
