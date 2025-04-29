"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

const comparisonData = [
  {
    feature: "Costo de mantención",
    bancoSimple: "Gratis",
    bancoTradicional: "$3.990 mensual",
    highlight: true,
  },
  {
    feature: "Transferencias a otros bancos",
    bancoSimple: "Ilimitadas gratis",
    bancoTradicional: "Limitadas o con costo",
    highlight: true,
  },
  {
    feature: "Tarjeta de débito internacional",
    bancoSimple: "Incluida sin costo",
    bancoTradicional: "Costo adicional",
    highlight: true,
  },
  {
    feature: "Retiros en cajeros",
    bancoSimple: "3 gratis al mes",
    bancoTradicional: "Con costo",
    highlight: false,
  },
  {
    feature: "App móvil",
    bancoSimple: "Intuitiva y completa",
    bancoTradicional: "Básica",
    highlight: false,
  },
  {
    feature: "Atención al cliente",
    bancoSimple: "24/7 por chat y teléfono",
    bancoTradicional: "Horario limitado",
    highlight: false,
  },
  {
    feature: "Programa de beneficios",
    bancoSimple: "Incluido para todos",
    bancoTradicional: "Solo cuentas premium",
    highlight: true,
  },
  {
    feature: "Apertura de cuenta",
    bancoSimple: "100% online en minutos",
    bancoTradicional: "Presencial o proceso largo",
    highlight: false,
  },
]

const AccountComparison = () => {
  const { theme } = useTheme()

  return (
    <section id="comparativa" className={`py-20 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            ¿Por qué elegir BancoSimple?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Compara y descubre por qué somos la mejor opción para tus finanzas
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="overflow-x-auto"
        >
          <table className={`w-full border-collapse ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
            <thead>
              <tr className={`${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`}>
                <th className="p-4 text-left rounded-tl-lg">Características</th>
                <th className="p-4 text-center bg-green-600 text-white">BancoSimple</th>
                <th className="p-4 text-center rounded-tr-lg">Banco Tradicional</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0
                      ? theme === "dark"
                        ? "bg-gray-700/50"
                        : "bg-gray-100"
                      : theme === "dark"
                        ? "bg-gray-800"
                        : "bg-white"
                  } ${
                    item.highlight
                      ? theme === "dark"
                        ? "border-l-4 border-green-500"
                        : "border-l-4 border-green-500"
                      : ""
                  }`}
                >
                  <td className="p-4 font-medium">{item.feature}</td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center">
                      <Check className="text-green-500 mr-2" size={18} />
                      <span>{item.bancoSimple}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center">
                      {item.bancoTradicional.includes("Con costo") ||
                      item.bancoTradicional.includes("Limitadas") ||
                      item.bancoTradicional.includes("Costo adicional") ||
                      item.bancoTradicional.includes("Solo cuentas premium") ||
                      item.bancoTradicional.includes("Básica") ||
                      item.bancoTradicional.includes("Horario limitado") ||
                      item.bancoTradicional.includes("Presencial") ? (
                        <X className="text-red-500 mr-2" size={18} />
                      ) : null}
                      <span>{item.bancoTradicional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}

export default AccountComparison
