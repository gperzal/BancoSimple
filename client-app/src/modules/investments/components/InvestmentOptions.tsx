"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, PieChart, Clock } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

export default function InvestmentOptions() {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState("fondos");

  const investmentOptions = {
    fondos: {
      title: "Fondos de Inversión",
      description:
        "Diversifica tu capital con nuestros fondos gestionados por expertos",
      icon: PieChart,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-500/10",
      options: [
        {
          name: "Fondo Conservador",
          description:
            "Ideal para perfiles de bajo riesgo con horizonte de corto plazo",
          return: "3% - 5% anual",
          risk: "Bajo",
          minInvestment: "$100.000",
          term: "30 días",
          features: [
            "Liquidez inmediata",
            "Diversificación en renta fija",
            "Sin comisión de entrada",
          ],
        },
        {
          name: "Fondo Balanceado",
          description:
            "Equilibrio entre renta fija y variable para riesgo moderado",
          return: "5% - 8% anual",
          risk: "Medio",
          minInvestment: "$500.000",
          term: "180 días",
          features: [
            "Diversificación global",
            "Gestión activa",
            "Rebalanceo trimestral",
          ],
        },
        {
          name: "Fondo Crecimiento",
          description:
            "Enfocado en renta variable para maximizar rendimientos a largo plazo",
          return: "8% - 12% anual",
          risk: "Alto",
          minInvestment: "$1.000.000",
          term: "1 año",
          features: [
            "Exposición a mercados emergentes",
            "Gestión por expertos",
            "Enfoque en tecnología y energías limpias",
          ],
        },
      ],
    },
    depositos: {
      title: "Depósitos a Plazo",
      description: "Seguridad y rentabilidad garantizada para tu dinero",
      icon: Clock,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-500/10",
      options: [
        {
          name: "Depósito 30 días",
          description: "Rentabilidad a corto plazo con tasa garantizada",
          return: "4.5% anual",
          risk: "Muy bajo",
          minInvestment: "$100.000",
          term: "30 días",
          features: [
            "Tasa garantizada",
            "Capital asegurado",
            "Renovación automática",
          ],
        },
        {
          name: "Depósito 90 días",
          description: "Mayor rentabilidad con compromiso trimestral",
          return: "5.2% anual",
          risk: "Muy bajo",
          minInvestment: "$500.000",
          term: "90 días",
          features: [
            "Tasa preferencial",
            "Capital asegurado",
            "Posibilidad de renovación",
          ],
        },
        {
          name: "Depósito 1 año",
          description: "Maximiza tu rentabilidad con un horizonte anual",
          return: "6.5% anual",
          risk: "Muy bajo",
          minInvestment: "$1.000.000",
          term: "1 año",
          features: [
            "Mejor tasa del mercado",
            "Capital asegurado",
            "Certificado digital",
          ],
        },
      ],
    },
    acciones: {
      title: "Acciones y ETFs",
      description: "Invierte en empresas líderes y sectores estratégicos",
      icon: TrendingUp,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-500/10",
      options: [
        {
          name: "Acciones Nacionales",
          description: "Invierte en las principales empresas del país",
          return: "Variable",
          risk: "Alto",
          minInvestment: "$100.000",
          term: "Indefinido",
          features: [
            "Comisiones competitivas",
            "Asesoría especializada",
            "Información en tiempo real",
          ],
        },
        {
          name: "Acciones Internacionales",
          description:
            "Accede a los mercados globales desde nuestra plataforma",
          return: "Variable",
          risk: "Alto",
          minInvestment: "$500.000",
          term: "Indefinido",
          features: [
            "Acceso a NYSE, NASDAQ y más",
            "Operaciones en USD y EUR",
            "Análisis técnico avanzado",
          ],
        },
        {
          name: "ETFs Temáticos",
          description:
            "Diversificación en sectores específicos con un solo instrumento",
          return: "Variable",
          risk: "Medio-Alto",
          minInvestment: "$300.000",
          term: "Indefinido",
          features: [
            "Tecnología, energías limpias, salud",
            "Diversificación instantánea",
            "Bajas comisiones",
          ],
        },
      ],
    },
  };

  const currentOption =
    investmentOptions[activeTab as keyof typeof investmentOptions];
  const Icon = currentOption.icon;

  return (
    <section
      id="opciones"
      className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Opciones de inversión para cada perfil
          </h2>
          <p className="text-xl text-muted-foreground">
            Encuentra la inversión que mejor se adapte a tus objetivos
            financieros y nivel de riesgo.
          </p>
        </div>

        <Tabs
          defaultValue="fondos"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-4xl mx-auto"
        >
          <TabsList className="bg-transparent  border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] p-1 rounded-xl mt-4">
            <TabsTrigger value="fondos" className="tabs-trigger-primary">
              <PieChart className="h-5 w-5 mr-2" /> Fondos de Inversión
            </TabsTrigger>
            <TabsTrigger value="depositos" className="tabs-trigger-primary">
              <Clock className="h-5 w-5 mr-2" /> Depósitos a Plazo
            </TabsTrigger>
            <TabsTrigger value="acciones" className="tabs-trigger-primary">
              <TrendingUp className="h-5 w-5 mr-2" /> Acciones y ETFs
            </TabsTrigger>
          </TabsList>

          {Object.keys(investmentOptions).map((key) => (
            <TabsContent key={key} value={key} className="mt-6">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center mb-8">
                  <div
                    className={`w-16 h-16 rounded-full ${currentOption.bgColor} flex items-center justify-center mr-4`}
                  >
                    <Icon className={`h-8 w-8 ${currentOption.color}`} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold">
                      {currentOption.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {currentOption.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {currentOption.options.map((option, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`rounded-xl p-6 border ${
                        theme === "dark"
                          ? "border-gray-700 bg-gray-800"
                          : "border-gray-200 bg-white"
                      } shadow-lg hover:shadow-xl transition-all`}
                    >
                      <h4 className="text-xl font-bold mb-2">{option.name}</h4>
                      <p className="text-muted-foreground mb-4">
                        {option.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Rendimiento:
                          </span>
                          <span
                            className={`font-medium ${currentOption.color}`}
                          >
                            {option.return}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Riesgo:</span>
                          <span className="font-medium">{option.risk}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Inversión mínima:
                          </span>
                          <span className="font-medium">
                            {option.minInvestment}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Plazo:</span>
                          <span className="font-medium">{option.term}</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        {option.features.map((feature, i) => (
                          <div key={i} className="flex items-start">
                            <div className="rounded-full bg-green-500/10 p-1 mr-2 mt-0.5">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        asChild
                        className="w-full rounded-full bg-green-600 hover:bg-green-700 text-white"
                      >
                        <Link to="/register">Invertir ahora</Link>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
