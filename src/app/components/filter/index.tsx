
import { useRef, useState } from "react"
import { Brands, brands } from "./brands"

export const FilterBar = ({
    handleBrandChange,
    handleSearch
}: {
    handleSearch?: (searchQuery: string) => void,
    handleBrandChange?: (brand: Brands) => void,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);
    return (
        <div className="flex
            flex-col
            items-center
            justify-start
            bg-height
            gap-6
            glass
            p-4
            flex-wrap
            lg:flex-row
            lg:items-start
            lg:gap-x-6 lg:gap-y-8
            ">
            <span className="font-bold text-xl w-full">
                Filter by:
            </span>  
            <section className="font-semibold
                text-l
                flex
                flex-col
                items-start
                justify-start
                gap-2
                w-full
                lg:flex-row
                lg:items-center
                lg:gap-8
                lg:w-auto">
                Product Name:
                <input ref={inputRef} className="rounded-md p-2 w-full block lg:w-auto lg-inline-block" onChange={(event) => {
                    handleSearch && handleSearch(event.target.value ?? "");
                }}/>
            </section>
            <section className="font-semibold
                text-l
                flex
                flex-col
                items-start
                justify-start
                gap-2
                w-full
                lg:flex-row
                lg:items-center
                lg:gap-8
                lg:w-auto">

                Brand:
                <select ref={selectRef}  className="rounded-md p-2 font-normal w-full lg:w-auto" onChange={(event) => {
                    handleBrandChange && handleBrandChange(event.target.value as Brands);
                }}>
                    {brands.map((brand, idx) => 
                        <option key={`brand-${idx}`} value={brand}>
                            {brand}
                        </option>
                    )}
                </select>
            </section>
        </div>
    )
}