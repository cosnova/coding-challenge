import { useEffect, useState } from "react";
import { Brands, Product, ProductFilter } from "./types";

const BE_URL = import.meta.env.VITE_BE_URL;

const PRODUCTS_ENDPOINT = `/products.json`;

const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filters, setFilters] = useState<ProductFilter>({
        brand: Brands.almay
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
    
            const url = new URL(`${BE_URL}${PRODUCTS_ENDPOINT}`);
            url.search = (new URLSearchParams(filters as Record<string, string>)).toString();
    
            const response = await fetch(url);
            if (!response.ok) {
                setError('Something went wrong ' + response.status + ' ' + response.statusText);
                setLoading(false);
                return;
            }
    
            let products = await response.json();

            // Since the filter "name" is not supported by the API, we need to filter the products manually
            // I'm on purpose not removing the "name" filter from the URL query parameters, so that it can be supported in the future by the API
            if (filters?.name) {
                const name = filters.name.toLowerCase();
                products = products.filter((product: Product) => product.name.toLowerCase().includes(name));
            }
            
            // Since the API, some times, doesn't return the currency and price_sign for some products, we need to set those manually.
            // This should be brought up with the BE team to fix it.
            products.forEach((product: Product) => {
                if(!product.currency || !product.price_sign) {
                    product.currency = 'USD';
                    product.price_sign = '$';
                }
            });
    
            setProducts(products);
            setLoading(false);
        }

        fetchProducts();
    }, [ filters ]);

    return {
        products,
        loading,
        error,
        filters,
        setFilters,
    }
}

export default useProducts;