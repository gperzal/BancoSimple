"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ShoppingBag, Utensils, Plane, Film } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

export default function BenefitsCategories() {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState("shopping");

  const benefitCategories = {
    shopping: {
      title: "Tiendas y Retail",
      description: "Descuentos exclusivos en tus compras favoritas",
      icon: ShoppingBag,
      color: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-500/10",
      benefits: [
        {
          name: "EcoMarket",
          description: "40% de descuento en toda la tienda",
          image: "/placeholder.svg?height=200&width=300",
          discount: "40%",
          validUntil: "31/12/2025",
          conditions:
            "Válido para compras online y en tienda. Máximo descuento: $50.000",
        },
        {
          name: "TechStore",
          description: "25% de descuento en smartphones y tablets",
          image: "/placeholder.svg?height=200&width=300",
          discount: "25%",
          validUntil: "31/12/2025",
          conditions:
            "Válido para compras con tarjeta de crédito. No acumulable con otras promociones.",
        },
        {
          name: "FashionNow",
          description: "30% de descuento en toda la tienda",
          image: "/placeholder.svg?height=200&width=300",
          discount: "30%",
          validUntil: "31/12/2025",
          conditions:
            "Válido de lunes a jueves. No aplica en temporada de rebajas.",
        },
      ],
    },
    restaurants: {
      title: "Restaurantes",
      description: "Disfruta de las mejores experiencias gastronómicas",
      icon: Utensils,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-500/10",
      benefits: [
        {
          name: "Sushi Express",
          description: "2x1 en rolls y combinados",
          image: "/placeholder.svg?height=200&width=300",
          discount: "2x1",
          validUntil: "31/12/2025",
          conditions: "Válido de lunes a jueves. No válido para delivery.",
        },
        {
          name: "Burger Gourmet",
          description: "30% de descuento en combos",
          image: "/placeholder.svg?height=200&width=300",
          discount: "30%",
          validUntil: "31/12/2025",
          conditions: "Válido todos los días. Máximo 2 combos por cliente.",
        },
        {
          name: "Café Delicioso",
          description: "50% de descuento en la segunda bebida",
          image: "/placeholder.svg?height=200&width=300",
          discount: "50%",
          validUntil: "31/12/2025",
          conditions:
            "Válido de lunes a viernes. Bebida de igual o menor valor.",
        },
      ],
    },
    travel: {
      title: "Viajes",
      description: "Descubre el mundo con nuestros beneficios exclusivos",
      icon: Plane,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-500/10",
      benefits: [
        {
          name: "AeroViajes",
          description: "15% de descuento en pasajes internacionales",
          image: "/placeholder.svg?height=200&width=300",
          discount: "15%",
          validUntil: "31/12/2025",
          conditions:
            "Válido para compras con tarjeta de crédito. No aplica en temporada alta.",
        },
        {
          name: "HotelPlus",
          description: "25% de descuento en hoteles seleccionados",
          image: "/placeholder.svg?height=200&width=300",
          discount: "25%",
          validUntil: "31/12/2025",
          conditions:
            "Válido para reservas de mínimo 2 noches. Sujeto a disponibilidad.",
        },
        {
          name: "RentCar",
          description: "30% de descuento en alquiler de autos",
          image: "/placeholder.svg?height=200&width=300",
          discount: "30%",
          validUntil: "31/12/2025",
          conditions:
            "Válido para alquileres de 3 días o más. Incluye seguro básico.",
        },
      ],
    },
    entertainment: {
      title: "Entretenimiento",
      description: "Diversión asegurada con nuestros descuentos",
      icon: Film,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-500/10",
      benefits: [
        {
          name: "CinePlus",
          description: "2x1 en entradas todos los días",
          image: "/placeholder.svg?height=200&width=300",
          discount: "2x1",
          validUntil: "31/12/2025",
          conditions:
            "Válido todos los días. No aplica para estrenos ni funciones 3D/4D.",
        },
        {
          name: "GameZone",
          description: "50% de descuento en entradas",
          image: "/placeholder.svg?height=200&width=300",
          discount: "50%",
          validUntil: "31/12/2025",
          conditions:
            "Válido de lunes a jueves. Máximo 4 entradas por cliente.",
        },
        {
          name: "MusicStream",
          description: "3 meses gratis en suscripción premium",
          image: "/placeholder.svg?height=200&width=300",
          discount: "100%",
          validUntil: "31/12/2025",
          conditions:
            "Válido para nuevos usuarios. Después del periodo gratuito se cobra tarifa normal.",
        },
      ],
    },
  };

  const currentCategory =
    benefitCategories[activeTab as keyof typeof benefitCategories];
  const Icon = currentCategory.icon;

  return (
    <section
      id="categorias"
      className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Beneficios para todos los gustos
          </h2>
          <p className="text-xl text-muted-foreground">
            Descubre las diferentes categorías de beneficios exclusivos para
            clientes de Banco Simple.
          </p>
        </div>

        <Tabs
          defaultValue="shopping"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-4xl mx-auto"
        >
          <TabsList className="bg-transparent  border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] p-1 rounded-xl mt-4">
            <TabsTrigger value="shopping" className="tabs-trigger-primary">
              <ShoppingBag className="h-5 w-5 mr-2" /> Tiendas
            </TabsTrigger>
            <TabsTrigger value="restaurants" className="tabs-trigger-primary">
              <Utensils className="h-5 w-5 mr-2" /> Restaurantes
            </TabsTrigger>
            <TabsTrigger value="travel" className="tabs-trigger-primary">
              <Plane className="h-5 w-5 mr-2" /> Viajes
            </TabsTrigger>
            <TabsTrigger value="entertainment" className="tabs-trigger-primary">
              <Film className="h-5 w-5 mr-2" /> Entretenimiento
            </TabsTrigger>
          </TabsList>

          {Object.keys(benefitCategories).map((key) => (
            <TabsContent key={key} value={key} className="mt-6">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center mb-8">
                  <div
                    className={`w-16 h-16 rounded-full ${currentCategory.bgColor} flex items-center justify-center mr-4`}
                  >
                    <Icon className={`h-8 w-8 ${currentCategory.color}`} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold">
                      {currentCategory.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {currentCategory.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {currentCategory.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`rounded-xl overflow-hidden border ${
                        theme === "dark"
                          ? "border-gray-700 bg-gray-800"
                          : "border-gray-200 bg-white"
                      } shadow-lg hover:shadow-xl transition-all`}
                    >
                      <div className="relative">
                        <img
                          src={benefit.image || "/placeholder.svg"}
                          alt={benefit.name}
                          className="w-full h-40 object-cover"
                        />
                        <div className="absolute top-0 right-0 bg-purple-600 text-white text-sm font-bold px-3 py-1 m-2 rounded-full">
                          {benefit.discount}
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold mb-2">
                          {benefit.name}
                        </h4>
                        <p className="text-muted-foreground mb-4">
                          {benefit.description}
                        </p>
                        <div className="text-sm text-muted-foreground mb-4">
                          <p>Válido hasta: {benefit.validUntil}</p>
                          <p className="mt-1">{benefit.conditions}</p>
                        </div>
                        <Button
                          asChild
                          className="w-full rounded-full bg-purple-600 hover:bg-purple-700 text-white"
                        >
                          <Link to="/register">Ver detalle</Link>
                        </Button>
                      </div>
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
