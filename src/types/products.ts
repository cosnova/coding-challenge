export type Product = {
  id: number,
  brand: string,
  name: string,
  description: string,
  image_link: URL,
  product_link: URL,
  product_api_url: URL,
  price: string,
  price_sign: string,
  currency: string,
  category: string,
  product_type: string,
}

export type Products = Product[];