import { ProductQuery } from '@/types/interfaces.ts'
import useProducts from '@/hooks/useProducts.ts'

interface Props {
  productQuery: ProductQuery
}

function ProductList({ productQuery }: Props) {
  const { data, error, isLoading } = useProducts(productQuery)

  if (error) return <p>{error}</p>

  const products = data.filter((product) =>
    product.name.toLowerCase().includes(productQuery.name.toLowerCase())
  )

  if (!isLoading && products.length === 0) return <p>No products to be displayed</p>

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {products && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <a
                href={product.product_link}
                target="_blank"
                rel="noopener"
              >
                <img
                  src={product.image_link}
                  alt={product.name}
                  height="64px"
                />
                {product.name} {product.price} {product.currency ?? '€'}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default ProductList
