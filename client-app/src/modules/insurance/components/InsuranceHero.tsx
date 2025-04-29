"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Shield, Heart, Home, Car } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function InsuranceHero() {
  const { theme } = useTheme();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Fondo con gradiente */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-r from-blue-900/20 to-blue-800/5"
            : "bg-gradient-to-r from-blue-50 to-indigo-50"
        }`}
      />

      {/* Círculos decorativos */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-500/10 filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-indigo-400/10 filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center text-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Protege lo que más{" "}
              <span className="text-blue-600 dark:text-blue-400">valoras</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Descubre nuestras soluciones de seguros diseñadas para brindarte
              tranquilidad y protección en cada etapa de tu vida.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start ">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link to="/register" className="flex items-center gap-2">
                  Cotizar ahora <ChevronRight size={18} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link to="#opciones" className="flex items-center gap-2">
                  Ver coberturas <ChevronRight size={18} />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-6 justify-center lg:justify-start">
              {[
                { icon: Shield, text: "Coberturas completas" },
                { icon: Heart, text: "Asistencia 24/7" },
                { icon: Home, text: "Hogar protegido" },
                { icon: Car, text: "Vehículos seguros" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
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
                src="https://img1.acierto.com/css/images/ac/media/opinion-liberty-2.jpg"
                alt="Familia protegida"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">
                    Protección para tu familia
                  </h3>
                  <p className="text-white/80">
                    Seguros diseñados para cada etapa de la vida
                  </p>
                </div>
              </div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400 rounded-full opacity-70 blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500 rounded-full opacity-20 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
