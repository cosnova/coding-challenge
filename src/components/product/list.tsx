import { CosnovaSelect } from "components/shared/cosnovaSelect";
import { useState } from "react";
import { RouterPage } from "types/navigator";
import { Products } from "types/products";
import { ProductOverview } from "./listOverview";

type ProductListProps = {
  navigatorTo: Function, // Move to a hook (basically use router)
  products: Products
};

export const ProductList = ({ products, navigatorTo }: ProductListProps) => {
  const [selectCategory, setSelectCategory] = useState("");
  const productCategories = [...new Set(products.map(({ category }) => category))].filter(category => !["", " "].includes(category))
  const shouldShowProducts = selectCategory !== "" && products;
  return (
    <div>
      <button onClick={() => navigatorTo(RouterPage.HOME)}>Go Home</button>
      <div>
        <CosnovaSelect value={selectCategory} options={productCategories} onChange={setSelectCategory} />
        {
          shouldShowProducts && products.filter(({ category }) => category === selectCategory).map(prod => (<ProductOverview key={prod.id} product={prod} />))
        }
      </div>
    </div>
  );
}
