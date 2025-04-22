"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Users, Store, Filter, PlusCircle, Download, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductsHeader } from "@/modules/dashboard/products/components/ProductsHeader"
import { ProductCard } from "@/modules/dashboard/products/components/ProductCard"
import { ProductsEmptyState } from "@/modules/dashboard/products/components/ProductsEmptyState"
import { useProducts } from "@/modules/dashboard/products/hooks/useProducts"
import type { ProductCategory } from "@/modules/dashboard/products/types/ProductTypes"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const { personalProducts, smeProducts, corporateProducts, isLoading } = useProducts()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
  }

  const filterProducts = (products: ProductCategory[]) => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }

  const filteredPersonalProducts = filterProducts(personalProducts)
  const filteredSmeProducts = filterProducts(smeProducts)
  const filteredCorporateProducts = filterProducts(corporateProducts)

  return (
    <section className="container mx-auto py-4 space-y-6 animate-fade-in">
      <ProductsHeader />

      {/* Tabs para segmentos de clientes */}
      <Tabs defaultValue="personal" className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <TabsList className="bg-transparent border border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] p-1 rounded-xl">
            <TabsTrigger value="personal" className="tabs-trigger-primary">
              <Users className="h-4 w-4 mr-2" />
              Personas
            </TabsTrigger>
            <TabsTrigger value="sme" className="tabs-trigger-primary">
              <Store className="h-4 w-4 mr-2" />
              Pymes
            </TabsTrigger>
            <TabsTrigger value="corporate" className="tabs-trigger-primary">
              <Building2 className="h-4 w-4 mr-2" />
              Empresas
            </TabsTrigger>
          </TabsList>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" className="button-outline-auto">
              <PlusCircle className="h-4 w-4 mr-2" />
              Nuevo producto
            </Button>
            <Button variant="outline" className="button-outline-auto">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        {/* Filtros y búsqueda */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10 input-primary"
            />
          </div>
          <div className="flex gap-2">
            <div className="w-full md:w-[200px]">
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="select-primary">
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Categoría" />
                  </div>
                </SelectTrigger>
                <SelectContent className="popover">
                  <SelectItem value="all">Todas las categorías</SelectItem>
                  <SelectItem value="accounts">Cuentas</SelectItem>
                  <SelectItem value="cards">Tarjetas</SelectItem>
                  <SelectItem value="loans">Préstamos</SelectItem>
                  <SelectItem value="investments">Inversiones</SelectItem>
                  <SelectItem value="insurance">Seguros</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Contenido de las pestañas */}
        <TabsContent value="personal" className="mt-0">
          {isLoading ? (
            <ProductsLoadingSkeleton />
          ) : filteredPersonalProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPersonalProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <ProductsEmptyState
              title="No se encontraron productos personales"
              description="Intenta con otra búsqueda o categoría"
            />
          )}
        </TabsContent>

        <TabsContent value="sme" className="mt-0">
          {isLoading ? (
            <ProductsLoadingSkeleton />
          ) : filteredSmeProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSmeProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <ProductsEmptyState
              title="No se encontraron productos para Pymes"
              description="Intenta con otra búsqueda o categoría"
            />
          )}
        </TabsContent>

        <TabsContent value="corporate" className="mt-0">
          {isLoading ? (
            <ProductsLoadingSkeleton />
          ) : filteredCorporateProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCorporateProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <ProductsEmptyState
              title="No se encontraron productos empresariales"
              description="Intenta con otra búsqueda o categoría"
            />
          )}
        </TabsContent>
      </Tabs>
    </section>
  )
}

function ProductsLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="card animate-pulse">
          <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      ))}
    </div>
  )
}
