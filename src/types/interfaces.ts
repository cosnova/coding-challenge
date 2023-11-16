export interface ProductQuery {
  name: string
  brand: string
}

export interface Product {
  id: number
  name: string
  brand: string
  price: string
  currency: string | null
  image_link: string
  product_link: string
}
