import FilterBar from '@/components/FilterBar.tsx'
import ProductList from '@/components/ProductList.tsx'
import getBrands from '@/services/brand-service.ts'
import { useState } from 'react'
import { ProductQuery } from '@/types/interfaces.ts'

function ListPage() {
  const brands = getBrands()
  const [productQuery, setProductQuery] = useState<ProductQuery>({
    name: '',
    brand: brands[0],
  })

  return (
    <div>
      <FilterBar
        brands={brands}
        productQuery={productQuery}
        onSelectName={(name) => setProductQuery({ ...productQuery, name })}
        onSelectBrand={(brand) => setProductQuery({ ...productQuery, brand })}
      />
      <ProductList productQuery={productQuery} />
    </div>
  )
}

export default ListPage
