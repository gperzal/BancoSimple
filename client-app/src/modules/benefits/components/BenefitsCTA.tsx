"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@shadcn/button";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

const BenefitsCTA = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-purple-50"}`}
    >
      <div className="container mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-3xl font-bold md:text-4xl"
            >
              Disfruta de todos estos beneficios y más
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-8 text-lg opacity-90"
            >
              Hazte cliente de BancoSimple hoy mismo y comienza a disfrutar de
              descuentos exclusivos, cashback y promociones especiales en tus
              marcas favoritas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="button-primary-auto">
                <Link to="/register" className="flex items-center gap-2">
                  Hazte cliente <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="button-outline-auto"
              >
                <Link to="/app">Iniciar sesión</Link>
              </Button>
            </motion.div>

            <p className="mt-6 text-sm opacity-80">
              Más de 500 beneficios disponibles para todos nuestros clientes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsCTA;
