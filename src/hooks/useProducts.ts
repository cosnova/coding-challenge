import { Product, ProductQuery } from '@/types/interfaces.ts'
import useData from '@/hooks/useData.ts'

const useProducts = (productQuery: ProductQuery) =>
  useData<Product>(
    '/products.json',
    {
      params: {
        brand: productQuery.brand,
      },
    },
    [productQuery.brand]
  )

export default useProducts
