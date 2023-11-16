import { ProductQuery } from '@/types/interfaces.ts'

interface Props {
  brands: string[]
  productQuery: ProductQuery
  onSelectName: (name: string) => void
  onSelectBrand: (brand: string) => void
}

function FilterBar({ brands, productQuery, onSelectName, onSelectBrand }: Props) {
  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row">
      <input
        type="text"
        onChange={(event) => onSelectName(event.target.value)}
        placeholder="Search..."
        className="rounded-md placeholder:italic placeholder:text-slate-400"
      />
      <select
        name="brand"
        onChange={(event) => onSelectBrand(event.target.value)}
        defaultValue={productQuery.brand}
        className="rounded-md"
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
