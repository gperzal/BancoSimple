"use client"

import { CheckCircle, XCircle, Car, Home, HeartPulse, Plane } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function InsuranceComparison() {
  const [activeTab, setActiveTab] = useState("auto")

  const autoFeatures = [
    { name: "Responsabilidad civil", basic: true, complete: true, premium: true },
    { name: "Daños a terceros", basic: true, complete: true, premium: true },
    { name: "Asistencia en ruta", basic: true, complete: true, premium: true },
    { name: "Defensa legal", basic: true, complete: true, premium: true },
    { name: "Daños propios (choque, volcamiento)", basic: false, complete: true, premium: true },
    { name: "Robo, hurto e incendio", basic: false, complete: true, premium: true },
    { name: "Auto de reemplazo", basic: false, complete: false, premium: true },
    { name: "Cobertura de accesorios", basic: false, complete: false, premium: true },
  ]

  const homeFeatures = [
    { name: "Incendio y daños por fuego", basic: true, complete: true, premium: true },
    { name: "Daños por fenómenos naturales", basic: true, complete: true, premium: true },
    { name: "Responsabilidad civil", basic: true, complete: true, premium: true },
    { name: "Asistencia domiciliaria", basic: true, complete: true, premium: true },
    { name: "Robo y daños por robo", basic: false, complete: true, premium: true },
    { name: "Daños por agua", basic: false, complete: true, premium: true },
    { name: "Cobertura de objetos de valor", basic: false, complete: false, premium: true },
    { name: "Alojamiento temporal", basic: false, complete: false, premium: true },
  ]

  const healthFeatures = [
    { name: "Consultas médicas", basic: true, complete: true, premium: true },
    { name: "Exámenes básicos", basic: true, complete: true, premium: true },
    { name: "Hospitalización por accidente", basic: true, complete: true, premium: true },
    { name: "Telemedicina 24/7", basic: true, complete: true, premium: true },
    { name: "Hospitalización por enfermedad", basic: false, complete: true, premium: true },
    { name: "Cobertura dental básica", basic: false, complete: true, premium: true },
    { name: "Cobertura internacional", basic: false, complete: false, premium: true },
    { name: "Medicamentos y tratamientos especiales", basic: false, complete: false, premium: true },
  ]

  const travelFeatures = [
    { name: "Asistencia médica por accidente", basic: true, complete: true, premium: true },
    { name: "Traslado médico de emergencia", basic: true, complete: true, premium: true },
    { name: "Pérdida de equipaje", basic: true, complete: true, premium: true },
    { name: "Asistencia telefónica 24/7", basic: true, complete: true, premium: true },
    { name: "Cobertura médica internacional", basic: false, complete: true, premium: true },
    { name: "Cancelación de viaje", basic: false, complete: true, premium: true },
    { name: "Cobertura para deportes extremos", basic: false, complete: false, premium: true },
    { name: "Indemnización por demora de vuelo", basic: false, complete: false, premium: true },
  ]

  const getFeatures = () => {
    switch (activeTab) {
      case "auto":
        return autoFeatures
      case "home":
        return homeFeatures
      case "health":
        return healthFeatures
      case "travel":
        return travelFeatures
      default:
        return autoFeatures
    }
  }

  const getPrices = () => {
    switch (activeTab) {
      case "auto":
        return { basic: "$15.990", complete: "$25.990", premium: "$35.990" }
      case "home":
        return { basic: "$12.990", complete: "$19.990", premium: "$29.990" }
      case "health":
        return { basic: "$39.990", complete: "$89.990", premium: "$129.990" }
      case "travel":
        return { basic: "$9.990", complete: "$19.990", premium: "$29.990" }
      default:
        return { basic: "$15.990", complete: "$25.990", premium: "$35.990" }
    }
  }

  const getIcon = () => {
    switch (activeTab) {
      case "auto":
        return Car
      case "home":
        return Home
      case "health":
        return HeartPulse
      case "travel":
        return Plane
      default:
        return Car
    }
  }

  const Icon = getIcon()
  const features = getFeatures()
  const prices = getPrices()

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Compara nuestros planes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Encuentra el seguro que mejor se adapta a tus necesidades y presupuesto.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Tabs defaultValue="auto" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="auto" className="flex items-center gap-2">
                <Car className="h-4 w-4" /> Auto
              </TabsTrigger>
              <TabsTrigger value="home" className="flex items-center gap-2">
                <Home className="h-4 w-4" /> Hogar
              </TabsTrigger>
              <TabsTrigger value="health" className="flex items-center gap-2">
                <HeartPulse className="h-4 w-4" /> Salud
              </TabsTrigger>
              <TabsTrigger value="travel" className="flex items-center gap-2">
                <Plane className="h-4 w-4" /> Viaje
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-1/4 p-4 text-left font-bold">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" />
                    Características
                  </div>
                </TableHead>
                <TableHead className="w-1/4 p-4 text-center font-bold">Plan Básico</TableHead>
                <TableHead className="w-1/4 p-4 text-center font-bold">Plan Completo</TableHead>
                <TableHead className="w-1/4 p-4 text-center font-bold">Plan Premium</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="p-4 font-medium">Precio mensual</TableCell>
                <TableCell className="p-4 text-center font-bold">{prices.basic}</TableCell>
                <TableCell className="p-4 text-center font-bold">{prices.complete}</TableCell>
                <TableCell className="p-4 text-center font-bold">{prices.premium}</TableCell>
              </TableRow>

              {features.map((feature, index) => (
                <TableRow key={index} className={index % 2 === 0 ? "bg-muted/20" : ""}>
                  <TableCell className="p-4">{feature.name}</TableCell>
                  <TableCell className="p-4 text-center">
                    {feature.basic ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="p-4 text-center">
                    {feature.complete ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="p-4 text-center">
                    {feature.premium ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell className="p-4"></TableCell>
                <TableCell className="p-4 text-center">
                  <Button className="button-primary w-full">Cotizar</Button>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <Button className="button-primary w-full">Cotizar</Button>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <Button className="button-primary w-full">Cotizar</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
