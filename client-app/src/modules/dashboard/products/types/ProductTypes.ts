export interface ProductCategory {
  id: string
  name: string
  description: string
  category: string
  features: string[]
  rate?: string
  isNew: boolean
  isPopular: boolean
  isPromo: boolean
}
