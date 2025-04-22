import { FileSearch } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductsEmptyStateProps {
  title: string
  description: string
}

export function ProductsEmptyState({ title, description }: ProductsEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="rounded-full bg-primary/10 p-4 mb-4">
        <FileSearch className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Button variant="outline" className="button-outline-auto">
        Limpiar filtros
      </Button>
    </div>
  )
}
