import { Product } from "types/products";

type ProductOverviewProps = {
  product: Product
}
export const ProductOverview = ({ product }: ProductOverviewProps) => {
  return (<div > {product.name} | {product.id}</div>);
}
