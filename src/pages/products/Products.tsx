import useProducts from "../../api/products/useProducts";
import Autocomplete from '@mui/material/Autocomplete';
import { Brands } from "../../api/products/types";
import { useMemo } from "react";
import { debounce } from "@mui/material";
import { Filters, StyledTextField } from "./Products.styled";
import ProductCard from "../../components/product-card/ProductCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Loader from "../../components/loader/Loader";
import Error from "../../components/error/Error";

const Products = () => {
    const {products, loading, error, setFilters, filters} = useProducts();
    const brands = useMemo(() => Object.values(Brands).map(brand => ({label: brand, option: brand})), []);

    const handleNameFilterChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
        setFilters({...filters, name: event.target.value ?? undefined});
    }, 500);

    return <>
        <h1>Products</h1>

        <Filters>
            <StyledTextField id="product-name" label="Product Name" variant="outlined" onChange={handleNameFilterChange} />

            <Autocomplete
                disablePortal
                id="product-brand"
                options={brands}
                sx={{ width: 300 }}
                defaultValue={{label: Brands.almay, option: Brands.almay}}
                isOptionEqualToValue={(option, value) => option.option === value.option}
                onChange={(_event, value) => setFilters({...filters, brand: value?.option ?? undefined})}
                renderInput={(params) => <StyledTextField {...params} label="Brand" />}
            />
        </Filters>

        <Loader isLoading={loading} />
        {!loading && <Error error={error} />}

        {!loading && !error && !filters.brand && <div>You need to specify a brand</div>}
        {!loading && !error && filters.brand && (!products || products.length === 0) && <div>No products found</div>}
        {!loading && !error && filters.brand && products && products.length > 0 && 
            <Grid2 container spacing={2}>
                {products.map(product => <Grid2 key={product.id}  xs={6} md={3} lg={2}>
                    <ProductCard 
                        name={product.name} 
                        image={product.image_link} 
                        price={product.price} 
                        currency={product.price_sign} 
                        url={product.product_link} />
                </Grid2>)}
            </Grid2>}
    </>
};

export default Products;