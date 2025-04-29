// src/modules/dashboard/products/hooks/useProducts.ts

import { useState, useEffect } from "react";
import { getAllProducts } from "@/modules/dashboard/products/services/productsService";
import type { ProductCategory } from "@/modules/dashboard/products/types/ProductTypes";
import { ProductTypeEnum, ProductSegmentEnum } from "@/modules/dashboard/products/types/ProductTypes";

type ProductTypeFilter = "ALL" | ProductTypeEnum;

export function useProducts() {
  const [products, setProducts] = useState<ProductCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductType, setSelectedProductType] = useState<ProductTypeFilter>("ALL");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleProductTypeChange = (type: string) => {
    if (type === "ALL") {
      setSelectedProductType("ALL");
    } else if (Object.values(ProductTypeEnum).includes(type as ProductTypeEnum)) {
      setSelectedProductType(type as ProductTypeEnum);
    } else {
      console.warn(`Tipo de producto inválido seleccionado: ${type}`);
    }
  };

  const filterProducts = (segment: ProductSegmentEnum) => {
    return products
      .filter((product) => product.segment === segment)
      .filter((product) => {
        const matchesSearch =
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesType =
          selectedProductType === "ALL" || product.productType === selectedProductType;
        
        return matchesSearch && matchesType;
      });
  };

  return {
    isLoading,
    filterProducts,
    handleSearch,
    handleProductTypeChange,
    searchQuery,
    selectedProductType,
  };
}
