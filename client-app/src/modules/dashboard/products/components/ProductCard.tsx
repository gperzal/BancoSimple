import { CreditCard, Landmark, Banknote, TrendingUp, Shield, ArrowRight, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { ProductCategory } from "@/modules/dashboard/products/types/ProductTypes"

const CATEGORY_ICONS = {
  accounts: Landmark,
  cards: CreditCard,
  loans: Banknote,
  investments: TrendingUp,
  insurance: Shield,
}

interface ProductCardProps {
  product: ProductCategory
}

export function ProductCard({ product }: ProductCardProps) {
  const IconComponent = CATEGORY_ICONS[product.category as keyof typeof CATEGORY_ICONS] || CreditCard

  return (
    <div className="card hover:border-primary/50 hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className="dashboard-card-icon bg-[var(--color-primary-lighter)] text-white rounded-full p-3">
          <IconComponent className="h-5 w-5" />
        </div>
        <div className="flex gap-2">
          {product.isNew && <Badge className="bg-blue-500 hover:bg-blue-600 text-white">Nuevo</Badge>}
          {product.isPopular && (
            <Badge className="bg-amber-500 hover:bg-amber-600 text-white flex items-center gap-1">
              <Star className="h-3 w-3 fill-current" /> Popular
            </Badge>
          )}
          {product.isPromo && <Badge className="bg-green-500 hover:bg-green-600 text-white">Promoción</Badge>}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

      <div className="space-y-2 mb-4">
        {product.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="rounded-full bg-primary/10 p-1 mt-0.5">
              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
            </div>
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>

      {product.rate && (
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-medium">Tasa:</span>
          <span className="text-primary font-bold">{product.rate}</span>
        </div>
      )}

      <Button className="button-primary w-full flex items-center justify-center gap-2">
        Ver detalles <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
