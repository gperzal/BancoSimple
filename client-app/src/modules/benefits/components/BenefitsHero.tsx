"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Gift, Tag, Ticket, CreditCard } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function BenefitsHero() {
  const { theme } = useTheme();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Fondo con gradiente */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-r from-purple-900/20 to-purple-800/5"
            : "bg-gradient-to-r from-purple-50 to-pink-50"
        }`}
      />

      {/* Círculos decorativos */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-purple-500/10 filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-pink-400/10 filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center text-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Disfruta de{" "}
              <span className="text-purple-600 dark:text-purple-400">
                beneficios únicos
              </span>{" "}
              con tu cuenta
            </h1>
            <p className="text-xl text-muted-foreground">
              Descubre un mundo de descuentos, promociones y experiencias
              exclusivas para clientes de Banco Simple.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Link to="/register" className="flex items-center gap-2">
                  Hazte cliente <ChevronRight size={18} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link to="#categorias" className="flex items-center gap-2">
                  Ver beneficios <ChevronRight size={18} />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-6 justify-center lg:justify-start">
              {[
                { icon: Gift, text: "Descuentos exclusivos" },
                { icon: Tag, text: "Promociones especiales" },
                { icon: Ticket, text: "Eventos VIP" },
                { icon: CreditCard, text: "Cashback en compras" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <item.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
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
                src="https://www.bancrece.cl/images/banner-beneficios-01.jpg"
                alt="Beneficios Banco Simple"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Programa de Beneficios</h3>
                  <p className="text-white/80">
                    Descuentos y promociones exclusivas para ti
                  </p>
                </div>
              </div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-400 rounded-full opacity-70 blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
