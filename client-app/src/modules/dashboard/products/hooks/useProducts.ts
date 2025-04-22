"use client"

import { useState, useEffect } from "react"
import type { ProductCategory } from "@/modules/dashboard/products/types/ProductTypes"

export function useProducts() {
  const [isLoading, setIsLoading] = useState(true)
  const [personalProducts, setPersonalProducts] = useState<ProductCategory[]>([])
  const [smeProducts, setSmeProducts] = useState<ProductCategory[]>([])
  const [corporateProducts, setCorporateProducts] = useState<ProductCategory[]>([])

  useEffect(() => {
    // Simulando carga de datos
    const loadData = async () => {
      setIsLoading(true)

      // En un caso real, aquí harías una llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setPersonalProducts([
        {
          id: "p1",
          name: "Cuenta Corriente Premium",
          description: "Cuenta con beneficios exclusivos y sin comisiones de mantenimiento",
          category: "accounts",
          features: ["Sin comisión de mantenimiento", "Tarjeta de débito sin costo", "Acceso a banca en línea 24/7"],
          isNew: true,
          isPopular: true,
          isPromo: false,
        },
        {
          id: "p2",
          name: "Tarjeta de Crédito Platinum",
          description: "Tarjeta con beneficios exclusivos y programa de recompensas",
          category: "cards",
          features: [
            "Acumulación de puntos por compras",
            "Seguro de viaje internacional",
            "Acceso a salas VIP en aeropuertos",
          ],
          rate: "18% anual",
          isNew: false,
          isPopular: true,
          isPromo: false,
        },
        {
          id: "p3",
          name: "Préstamo Personal Flexible",
          description: "Préstamo con tasas competitivas y plazos flexibles",
          category: "loans",
          features: ["Aprobación en 24 horas", "Plazos de hasta 60 meses", "Sin penalización por pago anticipado"],
          rate: "12.5% anual",
          isNew: false,
          isPopular: false,
          isPromo: true,
        },
        {
          id: "p4",
          name: "Cuenta de Ahorro Digital",
          description: "Cuenta de ahorro 100% digital con alta rentabilidad",
          category: "accounts",
          features: ["Sin comisiones", "Interés preferencial", "Retiros ilimitados sin costo"],
          rate: "3.5% anual",
          isNew: true,
          isPopular: false,
          isPromo: false,
        },
        {
          id: "p5",
          name: "Fondo de Inversión Diversificado",
          description: "Inversión diversificada con rendimientos competitivos",
          category: "investments",
          features: ["Inversión mínima accesible", "Diversificación automática", "Liquidez en 48 horas"],
          rate: "Rendimiento histórico: 8.2%",
          isNew: false,
          isPopular: false,
          isPromo: false,
        },
        {
          id: "p6",
          name: "Seguro de Vida Integral",
          description: "Protección completa para ti y tu familia",
          category: "insurance",
          features: ["Cobertura por fallecimiento", "Indemnización por invalidez", "Asistencia médica telefónica"],
          isNew: false,
          isPopular: false,
          isPromo: true,
        },
      ])

      setSmeProducts([
        {
          id: "s1",
          name: "Cuenta Corriente Empresarial",
          description: "Cuenta diseñada para las necesidades de pequeñas y medianas empresas",
          category: "accounts",
          features: [
            "Transferencias SEPA sin comisiones",
            "Tarjetas de empresa para empleados",
            "Integración con software contable",
          ],
          isNew: false,
          isPopular: true,
          isPromo: false,
        },
        {
          id: "s2",
          name: "Línea de Crédito Pyme",
          description: "Financiamiento flexible para capital de trabajo",
          category: "loans",
          features: [
            "Disponibilidad inmediata",
            "Intereses solo por el monto utilizado",
            "Renovación automática anual",
          ],
          rate: "Desde 9.5% anual",
          isNew: true,
          isPopular: false,
          isPromo: true,
        },
        {
          id: "s3",
          name: "TPV Digital",
          description: "Terminal punto de venta con tecnología contactless y móvil",
          category: "cards",
          features: ["Comisiones competitivas", "Liquidación en 24h", "Aceptación de todas las tarjetas"],
          rate: "1.2% por transacción",
          isNew: true,
          isPopular: true,
          isPromo: false,
        },
        {
          id: "s4",
          name: "Préstamo para Equipamiento",
          description: "Financiación para adquisición de maquinaria y equipos",
          category: "loans",
          features: ["Financiación hasta el 100%", "Plazos de hasta 7 años", "Carencia de hasta 12 meses"],
          rate: "7.8% anual",
          isNew: false,
          isPopular: false,
          isPromo: false,
        },
        {
          id: "s5",
          name: "Seguro Multirriesgo Negocio",
          description: "Protección integral para instalaciones y actividad",
          category: "insurance",
          features: ["Cobertura de daños materiales", "Responsabilidad civil", "Pérdida de beneficios"],
          isNew: false,
          isPopular: false,
          isPromo: true,
        },
      ])

      setCorporateProducts([
        {
          id: "c1",
          name: "Cash Management Global",
          description: "Solución integral para gestión de tesorería corporativa",
          category: "accounts",
          features: ["Gestión centralizada de cuentas", "Conciliación automática", "Informes personalizados"],
          isNew: false,
          isPopular: true,
          isPromo: false,
        },
        {
          id: "c2",
          name: "Financiación Sindicada",
          description: "Financiación estructurada para grandes proyectos",
          category: "loans",
          features: ["Estructuración a medida", "Múltiples tramos y divisas", "Plazos extendidos"],
          isNew: false,
          isPopular: false,
          isPromo: false,
        },
        {
          id: "c3",
          name: "Servicios de Comercio Internacional",
          description: "Soluciones para operaciones de comercio exterior",
          category: "accounts",
          features: ["Cartas de crédito", "Garantías internacionales", "Cobertura de riesgo país"],
          isNew: true,
          isPopular: false,
          isPromo: false,
        },
        {
          id: "c4",
          name: "Emisión de Bonos Corporativos",
          description: "Asesoramiento y colocación de emisiones de deuda",
          category: "investments",
          features: ["Estructuración completa", "Acceso a inversores institucionales", "Servicio post-emisión"],
          isNew: false,
          isPopular: false,
          isPromo: true,
        },
        {
          id: "c5",
          name: "Gestión de Riesgos Financieros",
          description: "Soluciones para cobertura de riesgos de mercado",
          category: "investments",
          features: ["Coberturas de tipo de cambio", "Coberturas de tipo de interés", "Coberturas de materias primas"],
          isNew: false,
          isPopular: true,
          isPromo: false,
        },
      ])

      setIsLoading(false)
    }

    loadData()
  }, [])

  return {
    personalProducts,
    smeProducts,
    corporateProducts,
    isLoading,
  }
}
