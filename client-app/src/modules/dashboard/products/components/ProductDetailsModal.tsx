"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CreditCard,
  Landmark,
  Banknote,
  TrendingUp,
  Shield,
  Star,
  ShoppingCart,
  Check,
} from "lucide-react";
import type { ProductCategory } from "@/modules/dashboard/products/types/ProductTypes";
import { ProductTypeEnum } from "@/modules/dashboard/products/types/ProductTypes";
import {
  ProductTypeTranslations,
  ProductSegmentTranslations,
} from "@/modules/dashboard/products/utils/productTranslations";

const PRODUCT_TYPE_ICONS = {
  [ProductTypeEnum.ACCOUNT]: Landmark,
  [ProductTypeEnum.CARD]: CreditCard,
  [ProductTypeEnum.LOAN]: Banknote,
  [ProductTypeEnum.INVESTMENT]: TrendingUp,
  [ProductTypeEnum.INSURANCE]: Shield,
};

interface ProductDetailsModalProps {
  product: ProductCategory;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetailsModal({
  product,
  isOpen,
  onClose,
}: ProductDetailsModalProps) {
  const IconComponent = PRODUCT_TYPE_ICONS[product.productType] || CreditCard;

  // Datos adicionales que podrían mostrarse en el modal
  const additionalDetails = {
    [ProductTypeEnum.ACCOUNT]: [
      { label: "Mantenimiento mensual", value: "Sin costo" },
      { label: "Transferencias", value: "Ilimitadas" },
      { label: "Retiros en cajeros", value: "Sin costo en red propia" },
    ],
    [ProductTypeEnum.CARD]: [
      { label: "Cuota anual", value: "$25.000" },
      { label: "Tasa de interés", value: "18% anual" },
      { label: "Programa de puntos", value: "1 punto por cada $1.000" },
    ],
    [ProductTypeEnum.LOAN]: [
      { label: "Plazo máximo", value: "60 meses" },
      { label: "Monto máximo", value: "$50.000.000" },
      { label: "Seguro desgravamen", value: "Incluido" },
    ],
    [ProductTypeEnum.INVESTMENT]: [
      { label: "Plazo mínimo", value: "30 días" },
      { label: "Inversión mínima", value: "$100.000" },
      { label: "Liquidez", value: "Alta" },
    ],
    [ProductTypeEnum.INSURANCE]: [
      { label: "Cobertura", value: "Nacional e internacional" },
      { label: "Deducible", value: "UF 1" },
      { label: "Asistencia", value: "24/7" },
    ],
  };

  const details = additionalDetails[product.productType] || [];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" popover">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="dashboard-card-icon bg-[var(--color-primary-lighter)] text-white rounded-full p-3">
              <IconComponent className="h-5 w-5" />
            </div>
            <DialogTitle className="text-2xl font-bold">
              {product.name}
            </DialogTitle>
          </div>
          <DialogDescription className="text-base">
            {product.description}
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-gray-500 hover:bg-gray-600 text-white">
              {ProductTypeTranslations[product.productType]}
            </Badge>
            <Badge className="bg-gray-500 hover:bg-gray-600 text-white">
              {ProductSegmentTranslations[product.segment]}
            </Badge>
            {product.isNew && (
              <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
                Nuevo
              </Badge>
            )}
            {product.isPopular && (
              <Badge className="bg-amber-500 hover:bg-amber-600 text-white flex items-center gap-1">
                <Star className="h-3 w-3 fill-current" /> Popular
              </Badge>
            )}
            {product.isPromo && (
              <Badge className="bg-green-500 hover:bg-green-600 text-white">
                Promoción
              </Badge>
            )}
          </div>

          {/* Características */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Características</h4>
            <div className="space-y-2">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detalles adicionales */}
          {details.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Detalles</h4>
              <div className="space-y-3">
                {details.map((detail, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-2"
                  >
                    <span className="text-sm text-muted-foreground">
                      {detail.label}
                    </span>
                    <span className="text-sm font-medium">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tasa */}
          {product.rate && (
            <div className="bg-primary/10 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Tasa:</span>
                <span className="text-primary text-xl font-bold">
                  {product.rate}
                </span>
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={onClose}
            className="button-outline-auto sm:flex-1"
          >
            Cerrar
          </Button>
          <Button className="button-primary-auto sm:flex-1 flex items-center justify-center gap-2">
            <ShoppingCart className="h-4 w-4" /> Solicitar ahora
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
