import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductsHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-primary/10 dark:bg-primary/20 rounded-xl p-4">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-primary mb-1">Productos Bancarios</h1>
        <p className="text-muted-foreground">
          Explora nuestra gama completa de productos financieros diseñados para satisfacer tus necesidades
        </p>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <Button className="button-primary-auto flex items-center gap-2">
          Comparar productos <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
