"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Home, Car, Heart, Briefcase, Check } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

export default function InsuranceOptions() {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState("vida");

  const insuranceOptions = {
    vida: {
      title: "Seguro de Vida",
      description: "Protección financiera para ti y tu familia",
      icon: Heart,
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-500/10",
      plans: [
        {
          name: "Vida Básico",
          description: "Cobertura esencial para proteger a tu familia",
          price: "Desde $8.990/mes",
          coverage: "$25.000.000",
          features: [
            "Cobertura por fallecimiento",
            "Indemnización por invalidez total",
            "Asistencia funeraria básica",
          ],
        },
        {
          name: "Vida Plus",
          description: "Mayor protección con beneficios adicionales",
          price: "Desde $15.990/mes",
          coverage: "$50.000.000",
          features: [
            "Cobertura por fallecimiento",
            "Indemnización por invalidez total y parcial",
            "Asistencia funeraria completa",
            "Cobertura por enfermedades graves",
          ],
        },
        {
          name: "Vida Premium",
          description: "Protección integral para ti y tu familia",
          price: "Desde $25.990/mes",
          coverage: "$100.000.000",
          features: [
            "Cobertura por fallecimiento",
            "Indemnización por invalidez total y parcial",
            "Asistencia funeraria premium",
            "Cobertura por enfermedades graves",
            "Seguro de hospitalización",
            "Beneficios en vida para educación",
          ],
        },
      ],
    },
    hogar: {
      title: "Seguro de Hogar",
      description: "Protección completa para tu vivienda y contenido",
      icon: Home,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-500/10",
      plans: [
        {
          name: "Hogar Básico",
          description: "Protección esencial para tu vivienda",
          price: "Desde $7.990/mes",
          coverage: "Hasta $50.000.000",
          features: [
            "Cobertura por incendio",
            "Daños por fenómenos naturales",
            "Responsabilidad civil",
          ],
        },
        {
          name: "Hogar Plus",
          description: "Mayor protección para tu hogar y contenido",
          price: "Desde $12.990/mes",
          coverage: "Hasta $100.000.000",
          features: [
            "Cobertura por incendio",
            "Daños por fenómenos naturales",
            "Responsabilidad civil",
            "Robo con fuerza",
            "Daños por agua",
          ],
        },
        {
          name: "Hogar Premium",
          description: "Protección integral para tu vivienda y bienes",
          price: "Desde $19.990/mes",
          coverage: "Hasta $200.000.000",
          features: [
            "Cobertura por incendio",
            "Daños por fenómenos naturales",
            "Responsabilidad civil",
            "Robo con fuerza y sin fuerza",
            "Daños por agua",
            "Asistencia domiciliaria 24/7",
            "Cobertura para equipos electrónicos",
          ],
        },
      ],
    },
    auto: {
      title: "Seguro de Auto",
      description: "Protección completa para tu vehículo",
      icon: Car,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-500/10",
      plans: [
        {
          name: "Auto Básico",
          description: "Cobertura esencial para tu vehículo",
          price: "Desde $15.990/mes",
          coverage: "Responsabilidad Civil",
          features: [
            "Responsabilidad civil obligatoria",
            "Asistencia en ruta básica",
            "Cobertura por daños a terceros",
          ],
        },
        {
          name: "Auto Plus",
          description: "Mayor protección para tu vehículo",
          price: "Desde $25.990/mes",
          coverage: "Terceros + Robo",
          features: [
            "Responsabilidad civil ampliada",
            "Asistencia en ruta completa",
            "Cobertura por daños a terceros",
            "Robo, hurto e incendio",
            "Cristales y lunas",
          ],
        },
        {
          name: "Auto Premium",
          description: "Protección integral para tu vehículo",
          price: "Desde $35.990/mes",
          coverage: "Todo Riesgo",
          features: [
            "Responsabilidad civil ampliada",
            "Asistencia en ruta premium",
            "Cobertura por daños a terceros",
            "Robo, hurto e incendio",
            "Daños propios (todo riesgo)",
            "Vehículo de reemplazo",
            "Conductor protegido",
          ],
        },
      ],
    },
    empresa: {
      title: "Seguro Empresarial",
      description: "Protección integral para tu negocio y empleados",
      icon: Briefcase,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-500/10",
      plans: [
        {
          name: "Empresa Básico",
          description: "Cobertura esencial para pequeños negocios",
          price: "Desde $29.990/mes",
          coverage: "Hasta $100.000.000",
          features: [
            "Cobertura por incendio",
            "Responsabilidad civil",
            "Robo con fuerza",
            "Asistencia básica",
          ],
        },
        {
          name: "Empresa Plus",
          description: "Mayor protección para medianas empresas",
          price: "Desde $49.990/mes",
          coverage: "Hasta $250.000.000",
          features: [
            "Cobertura por incendio",
            "Responsabilidad civil ampliada",
            "Robo con fuerza",
            "Daños por agua",
            "Pérdida de beneficios",
            "Asistencia 24/7",
          ],
        },
        {
          name: "Empresa Premium",
          description: "Protección integral para grandes empresas",
          price: "Desde $89.990/mes",
          coverage: "Hasta $500.000.000",
          features: [
            "Cobertura por incendio",
            "Responsabilidad civil ampliada",
            "Robo con fuerza y sin fuerza",
            "Daños por agua",
            "Pérdida de beneficios",
            "Seguro de equipos electrónicos",
            "Protección para empleados",
            "Asistencia premium 24/7",
          ],
        },
      ],
    },
  };

  const currentOption =
    insuranceOptions[activeTab as keyof typeof insuranceOptions];
  const Icon = currentOption.icon;

  return (
    <section id="opciones" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Seguros para cada necesidad
          </h2>
          <p className="text-xl text-muted-foreground">
            Encuentra la protección que mejor se adapte a tus necesidades y
            presupuesto.
          </p>
        </div>

        <Tabs
          defaultValue="vida"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-4xl mx-auto"
        >
          <TabsList className="bg-transparent  border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] p-1 rounded-xl mt-4">
            <TabsTrigger value="vida" className="tabs-trigger-primary">
              <Heart className="h-5 w-5 mr-2" /> Vida
            </TabsTrigger>
            <TabsTrigger value="hogar" className="tabs-trigger-primary">
              <Home className="h-5 w-5 mr-2" /> Hogar
            </TabsTrigger>
            <TabsTrigger value="auto" className="tabs-trigger-primary">
              <Car className="h-5 w-5 mr-2" /> Auto
            </TabsTrigger>
            <TabsTrigger value="empresa" className="tabs-trigger-primary">
              <Briefcase className="h-5 w-5 mr-2" /> Empresa
            </TabsTrigger>
          </TabsList>

          {Object.keys(insuranceOptions).map((key) => (
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
                  {currentOption.plans.map((plan, index) => (
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
                      <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                      <p className="text-muted-foreground mb-4">
                        {plan.description}
                      </p>

                      <div className="mb-4">
                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {plan.price}
                        </span>
                      </div>

                      <div className="mb-4">
                        <span className="text-sm text-muted-foreground">
                          Cobertura:
                        </span>
                        <span className="block font-medium">
                          {plan.coverage}
                        </span>
                      </div>

                      <div className="space-y-2 mb-6">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        asChild
                        className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Link to="/register">Cotizar ahora</Link>
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
