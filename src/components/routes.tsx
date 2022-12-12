import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getProducts } from "services/products";
import { RouterPage } from "types/navigator";
import { Products } from "types/products";
import { ErrorDiv } from "./error";
import { Home } from "./home";
import { ProductList } from "./product/list";


export const Router = () => {
  const [currentPage, setCurrentPage] = useState(RouterPage.HOME);
  const [productId, setProductId] = useState<undefined | number>(undefined);
  const { isLoading, error, data } = useQuery("productData", () => getProducts<Products>());
  const productData = data ? data : [];

  useEffect(() => {
    if (productData && productData.length > 0) {
      setProductId(Math.floor(Math.random() * productData.length));
    }
  }, [productData, isLoading]) // useMemo Product data

  if (error) return (
    <ErrorDiv message={error.toString()} />
  );

  switch (currentPage) {
    case (RouterPage.LIST): { return (<ProductList navigatorTo={setCurrentPage} products={productData} />); }
    default: {
      return (<Home navigatorTo={setCurrentPage} teaserProduct={productId ? productData[productId] : undefined} />)
    }
  }
}
