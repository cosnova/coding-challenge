import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { FC } from "react";
import { ProductPrice, ProductTitle } from "./ProductCard.styled";

type Props = {
    name: string;
    image: string;
    price: string;
    currency: string;
    url: string;
}

const ProductCard: FC<Props> = ({ name, image, price, currency, url}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={
            () => window.location.href = url
      }>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
          onError={({ currentTarget }) => {
            // Some images may fail to load, so we need to handle this case
            // for an example, select the brand "benefit"
            currentTarget.onerror = null;
            currentTarget.src="/hero.jpg";
          }}
        />
        <CardContent>
            <ProductTitle title={name}>{name}</ProductTitle>
            <ProductPrice>{currency}{price}</ProductPrice>
        </CardContent>
      </CardActionArea>
    </Card>
)};

export default ProductCard;