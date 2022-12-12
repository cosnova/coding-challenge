import { RouterPage } from "types/navigator";
import { Product } from "types/products";
import { ShowTeaserProduct } from "./product/teaserProduct";

type HomeProps = {
  navigatorTo: Function
  teaserProduct?: Product,
}
export const Home = ({ navigatorTo, teaserProduct }: HomeProps) => {
  return (
    <div>
      <header>
        <span><button className="astext" onClick={() => navigatorTo(RouterPage.LIST)}>list</button></span>
      </header>
      <section>
        <ShowTeaserProduct product={teaserProduct} />
      </section>
    </div>);
}
