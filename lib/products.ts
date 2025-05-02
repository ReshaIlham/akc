import type React from "react"
// Product data structure from products page
export interface ProductFeature {
  id: string
  title: string
  description: string
  image: string
  badge?: string
  features: string[]
  price: string
  link: string
  categoryId?: string
  categoryTitle?: string
  categoryColor?: string
}

export interface ProductCategory {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  products: ProductFeature[]
}

// This function will be used to find a product by its ID across all categories
export function findProductById(productId: string, categories: ProductCategory[]): ProductFeature | null {
  for (const category of categories) {
    const product = category.products.find((p) => p.id === productId)
    if (product) {
      return {
        ...product,
        categoryId: category.id,
        categoryTitle: category.title,
        categoryColor: category.color,
      } as any
    }
  }
  return null
}
