import Image from "next/image";
import Link from "next/link";

export const ProductCard = ({ product }: { product: Product }) => {
  console.log(product);
  return (
    <div className="glass bg-height p-2 flex flex-col justify-between">
      <Link href={product.product_link} target="_blank">
        <img
          src={`https:${product.api_featured_image}`}
          alt="product picture"
          className="w-full rounded-md"
        />
        <p
          className="text-xl font-semibold"
          dangerouslySetInnerHTML={{ __html: product.name }}
        />
        <p className="font-light">{product.brand}</p>
        <p className="text-xl font-bold text-cosnova-red">
          {product.price_sign ?? "€"}
          {product.price}
          &nbsp;
          {product.currency ?? "EUR"}
        </p>
      </Link>
    </div>
  );
};
