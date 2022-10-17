const fetchProducts = (brand, query) => {
  const PRODUCT_ENDPOINT = "https://makeup-api.herokuapp.com/api/v1/products.json";

  return fetch(PRODUCT_ENDPOINT + "?" + new URLSearchParams({
    brand: brand,
    product_type: query
  })).then((response) => response.json());

};

export default fetchProducts;
