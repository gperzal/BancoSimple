"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductsHeader } from "@/modules/dashboard/products/components/ProductsHeader";
import { ProductCard } from "@/modules/dashboard/products/components/ProductCard";
import { ProductsEmptyState } from "@/modules/dashboard/products/components/ProductsEmptyState";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building2,
  Users,
  Store,
  Filter,
  PlusCircle,
  Download,
  Search,
} from "lucide-react";
import { useProducts } from "@/modules/dashboard/products/hooks/useProducts";
import {
  ProductTypeEnum,
  ProductSegmentEnum,
} from "@/modules/dashboard/products/types/ProductTypes";
import { ProductTypeTranslations, ProductSegmentTranslations } from "@/modules/dashboard/products/utils/productTranslations";

export default function ProductsPage() {
  const {
    isLoading,
    filterProducts,
    handleSearch,
    handleProductTypeChange,
    searchQuery,
    selectedProductType,
  } = useProducts();

  const renderTabContent = (
    segment: ProductSegmentEnum,
    emptyTitle: string,
    emptyDescription: string
  ) => {
    const filteredProducts = filterProducts(segment);

    return isLoading ? (
      <ProductsLoadingSkeleton />
    ) : filteredProducts.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    ) : (
      <ProductsEmptyState title={emptyTitle} description={emptyDescription} />
    );
  };

  return (
    <section className="container mx-auto py-4 space-y-6 animate-fade-in">
      <ProductsHeader />

      <Tabs defaultValue={ProductSegmentEnum.PERSONAL} className="w-full">
        {/* Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <TabsList className="bg-transparent border border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] p-1 rounded-xl">
            <TabsTrigger
              value={ProductSegmentEnum.PERSONAL}
              className="tabs-trigger-primary"
            >
              <Users className="h-4 w-4 mr-2" />
              {ProductSegmentTranslations[ProductSegmentEnum.PERSONAL]}
            </TabsTrigger>

            <TabsTrigger
              value={ProductSegmentEnum.SME}
              className="tabs-trigger-primary"
            >
              <Store className="h-4 w-4 mr-2" />
              {ProductSegmentTranslations[ProductSegmentEnum.SME]}
            </TabsTrigger>

            <TabsTrigger
              value={ProductSegmentEnum.CORPORATE}
              className="tabs-trigger-primary"
            >
              <Building2 className="h-4 w-4 mr-2" />
              {ProductSegmentTranslations[ProductSegmentEnum.CORPORATE]}
            </TabsTrigger>
          </TabsList>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" className="button-outline-auto">
              <PlusCircle className="h-4 w-4 mr-2" /> Nuevo producto
            </Button>
            <Button variant="outline" className="button-outline-auto">
              <Download className="h-4 w-4 mr-2" /> Exportar
            </Button>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 input-primary"
            />
          </div>

          <div className="flex gap-2">
            <div className="w-full md:w-[200px]">
              <Select
                value={selectedProductType}
                onValueChange={handleProductTypeChange}
              >
                <SelectTrigger className="select-primary">
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Tipo de producto" />
                  </div>
                </SelectTrigger>
                <SelectContent className="popover">
                  <SelectItem value="ALL">Todos los tipos</SelectItem>
                  {Object.values(ProductTypeEnum).map((type) => (
                    <SelectItem key={type} value={type}>
                      {ProductTypeTranslations[type]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <TabsContent value={ProductSegmentEnum.PERSONAL}>
          {renderTabContent(
            ProductSegmentEnum.PERSONAL,
            "No se encontraron productos personales",
            "Intenta con otra búsqueda o tipo"
          )}
        </TabsContent>
        <TabsContent value={ProductSegmentEnum.SME}>
          {renderTabContent(
            ProductSegmentEnum.SME,
            "No se encontraron productos para Pymes",
            "Intenta con otra búsqueda o tipo"
          )}
        </TabsContent>
        <TabsContent value={ProductSegmentEnum.CORPORATE}>
          {renderTabContent(
            ProductSegmentEnum.CORPORATE,
            "No se encontraron productos empresariales",
            "Intenta con otra búsqueda o tipo"
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
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
  );
}
