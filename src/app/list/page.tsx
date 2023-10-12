'use client';

import { FilterBar } from "@/app/components/filter";
import { ProductCard } from "@/app/components/product";
import { useEffect, useState } from "react";
import { Brands, brands } from "@/app/components/filter/brands";

async function getData(brand: Brands) {
    const res = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
}


export default function Page() { 
    const [currentBrand, setCurrentBrand] = useState<Brands>(brands[0]);
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const handleSearch = (searchQuery: string) => {
        if(products) {
            setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase())))
        }
    };
    const handleBrandChange = async (newBrand: Brands) => {
        const data = await getData(newBrand) as Product[];
        if(products) setFilteredProducts(data);
        setProducts(data);
        setCurrentBrand(newBrand);
    }
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData(currentBrand) as Product[]; 
            setProducts(data);
            setFilteredProducts(data);
        };
        fetchData();
    }, [])
    
    if(!products || products.length === 0) {
        return <>
        
            <FilterBar handleBrandChange={handleBrandChange} handleSearch={handleSearch}/>
            <p className="bg-height
            gap-6
            glass
            p-4">No products to be displayed</p>
        </>
    }
    

    return (
        <>
            <FilterBar handleBrandChange={handleBrandChange} handleSearch={handleSearch}/>
            <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                { filteredProducts.map((product) => (
                    <ProductCard key={`prod-${product.id}`} product={product}/>
                ))}
            </section>
        </>
    )
}
