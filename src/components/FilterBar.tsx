import { useState } from 'react'
import { ProductQuery } from '@/types/interfaces.ts'
import getBrands from '@/services/brand-service.ts'

function FilterBar() {
  const brands = getBrands()
  const [productQuery, setProductQuery] = useState<ProductQuery>({
    name: '',
    brand: brands[0],
  })

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setProductQuery({ ...productQuery, name: event.target.value })}
      />
      <select
        name="brand"
        onChange={(event) => setProductQuery({ ...productQuery, brand: event.target.value })}
      >
        {brands.map((brand, index) => (
          <option
            key={index}
            value={brand}
            selected={brand === productQuery.brand}
          >
            {brand}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterBar
