"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "@/context/ThemeContext"

export default function InvestmentPerformance() {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [period, setPeriod] = useState("1y")

  // Datos simulados de rendimiento
  const performanceData = {
    "1m": [
      { name: "Semana 1", conservador: 0.2, balanceado: 0.3, crecimiento: -0.5 },
      { name: "Semana 2", conservador: 0.4, balanceado: 0.1, crecimiento: 1.2 },
      { name: "Semana 3", conservador: 0.3, balanceado: 0.7, crecimiento: 0.8 },
      { name: "Semana 4", conservador: 0.5, balanceado: 0.4, crecimiento: 1.5 },
    ],
    "6m": [
      { name: "Ene", conservador: 0.8, balanceado: 1.2, crecimiento: 1.8 },
      { name: "Feb", conservador: 0.7, balanceado: 0.9, crecimiento: -0.5 },
      { name: "Mar", conservador: 1.0, balanceado: 1.5, crecimiento: 2.3 },
      { name: "Abr", conservador: 0.9, balanceado: 1.3, crecimiento: 1.9 },
      { name: "May", conservador: 1.1, balanceado: 1.7, crecimiento: 2.5 },
      { name: "Jun", conservador: 1.2, balanceado: 1.8, crecimiento: 3.0 },
    ],
    "1y": [
      { name: "Jul", conservador: 0.8, balanceado: 1.2, crecimiento: 1.8 },
      { name: "Ago", conservador: 0.7, balanceado: 0.9, crecimiento: -0.5 },
      { name: "Sep", conservador: 1.0, balanceado: 1.5, crecimiento: 2.3 },
      { name: "Oct", conservador: 0.9, balanceado: 1.3, crecimiento: 1.9 },
      { name: "Nov", conservador: 1.1, balanceado: 1.7, crecimiento: 2.5 },
      { name: "Dic", conservador: 1.2, balanceado: 1.8, crecimiento: 3.0 },
      { name: "Ene", conservador: 0.9, balanceado: 1.4, crecimiento: 2.1 },
      { name: "Feb", conservador: 1.0, balanceado: 1.6, crecimiento: 2.4 },
      { name: "Mar", conservador: 1.1, balanceado: 1.7, crecimiento: 2.6 },
      { name: "Abr", conservador: 1.2, balanceado: 1.8, crecimiento: 2.8 },
      { name: "May", conservador: 1.3, balanceado: 1.9, crecimiento: 3.0 },
      { name: "Jun", conservador: 1.4, balanceado: 2.0, crecimiento: 3.2 },
    ],
    "5y": [
      { name: "2020", conservador: 4.5, balanceado: 6.8, crecimiento: 9.2 },
      { name: "2021", conservador: 4.8, balanceado: 7.2, crecimiento: 10.5 },
      { name: "2022", conservador: 5.0, balanceado: 7.5, crecimiento: 11.0 },
      { name: "2023", conservador: 5.2, balanceado: 7.8, crecimiento: 11.5 },
      { name: "2024", conservador: 5.5, balanceado: 8.2, crecimiento: 12.0 },
    ],
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Rendimiento histórico</h2>
          <p className="text-xl text-muted-foreground">
            Conoce el desempeño de nuestros fondos de inversión a lo largo del tiempo.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex justify-end mb-6">
            <Tabs defaultValue="1y" value={period} onValueChange={setPeriod}>
              <TabsList>
                <TabsTrigger value="1m">1M</TabsTrigger>
                <TabsTrigger value="6m">6M</TabsTrigger>
                <TabsTrigger value="1y">1A</TabsTrigger>
                <TabsTrigger value="5y">5A</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div
            className={`p-6 rounded-xl border ${theme === "dark" ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"} shadow-lg`}
          >
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={performanceData[period as keyof typeof performanceData]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#444" : "#eee"} />
                  <XAxis dataKey="name" stroke={theme === "dark" ? "#aaa" : "#666"} />
                  <YAxis stroke={theme === "dark" ? "#aaa" : "#666"} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: theme === "dark" ? "#333" : "#fff",
                      borderColor: theme === "dark" ? "#555" : "#ddd",
                      color: theme === "dark" ? "#fff" : "#333",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="conservador"
                    name="Fondo Conservador"
                    stroke="#4ade80"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="balanceado"
                    name="Fondo Balanceado"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="crecimiento"
                    name="Fondo Crecimiento"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-green-500/10">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <h4 className="font-semibold">Fondo Conservador</h4>
                </div>
                <p className="text-sm text-muted-foreground">Rendimiento estable con bajo riesgo</p>
              </div>
              <div className="p-4 rounded-lg bg-blue-500/10">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <h4 className="font-semibold">Fondo Balanceado</h4>
                </div>
                <p className="text-sm text-muted-foreground">Equilibrio entre rendimiento y seguridad</p>
              </div>
              <div className="p-4 rounded-lg bg-purple-500/10">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                  <h4 className="font-semibold">Fondo Crecimiento</h4>
                </div>
                <p className="text-sm text-muted-foreground">Mayor potencial de ganancia a largo plazo</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-6 text-center">
              Los rendimientos pasados no garantizan rendimientos futuros. Antes de invertir, consulta el prospecto del
              fondo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
