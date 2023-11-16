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
    <div className="mx-auto max-w-4xl px-4 pb-4 md:px-8">
      <div className="flex flex-col items-center gap-4">
        <FilterBar
          brands={brands}
          productQuery={productQuery}
          onSelectName={(name) => setProductQuery({ ...productQuery, name })}
          onSelectBrand={(brand) => setProductQuery({ ...productQuery, brand })}
        />
        <ProductList productQuery={productQuery} />
      </div>
    </div>
  )
}

export default ListPage
