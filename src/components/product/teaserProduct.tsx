import { Product } from "types/products";

type ProductOverviewProps = {
  product?: Product
}
export const ShowTeaserProduct = ({ product }: ProductOverviewProps) => {
  if (!product) return (<div>Loading</div>); // Should do something else
  return (
    <div>
      <h2>This teaser is for you</h2>
      <div > {product.name} | {product.id}</div>
    </div>);
}

