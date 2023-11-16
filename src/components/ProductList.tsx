import { ProductQuery } from '@/types/interfaces.ts'
import useProducts from '@/hooks/useProducts.ts'

interface Props {
  productQuery: ProductQuery
}

function ProductList({ productQuery }: Props) {
  const { data, error, isLoading } = useProducts(productQuery)

  if (error) {
    return <p className="text-lg font-bold text-red-600">{error}</p>
  }

  const products = data.filter((product) =>
    product.name.toLowerCase().includes(productQuery.name.toLowerCase())
  )

  if (!isLoading && products.length === 0) {
    return <p className="text-center italic">No products to be displayed</p>
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {products && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden rounded-lg border border-gray-300 bg-white p-2 group hover:shadow-md"
            >
              <a
                href={product.product_link}
                target="_blank"
                rel="noopener"
                className="flex flex-col items-center gap-2 overflow-hidden rounded-lg group-hover:opacity-75"
              >
                <img
                  src={product.image_link}
                  alt={product.name}
                  className="h-48"
                />
                <p className="font-semibold">{product.name}</p>
                <p>
                  {product.price} {product.currency ?? '€'}
                </p>
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default ProductList
