import { ProductQuery } from '@/types/interfaces.ts'

interface Props {
  brands: string[]
  productQuery: ProductQuery
  onSelectName: (name: string) => void
  onSelectBrand: (brand: string) => void
}

function FilterBar({ brands, productQuery, onSelectName, onSelectBrand }: Props) {
  return (
    <div>
      <input
        type="text"
        onChange={(event) => onSelectName(event.target.value)}
      />
      <select
        name="brand"
        onChange={(event) => onSelectBrand(event.target.value)}
        defaultValue={productQuery.brand}
      >
        {brands.map((brand, index) => (
          <option
            key={index}
            value={brand}
          >
            {brand}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterBar
