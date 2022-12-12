import axios from "axios"

const productsUrl = "https://makeup-api.herokuapp.com/api/v1/products.json";
const productDetailsUrl = "https://makeup-api.herokuapp.com/api/v1/products/<productId>.json";
export const getProducts = async <T>(args: string = ""): Promise<T> => {
  try {
    const { data, status } = await axios.get<T>(`${productsUrl}?${args}`);
    if (status !== 200) {
      throw new Error("Unexpected response");
    }
    return data;
  } catch (e) {
    console.error(e);
    throw new Error("Server error");
  }
}

export const getProductDetails = async <T>(id: number | string, args: string = ""): Promise<T> => {
  try {
    const url = productDetailsUrl.replace("<productId>", id.toString());
    const { data, status } = await axios.get<T>(`${url}?${args}`);
    if (status !== 200) {
      throw new Error("Unexpected response");
    }
    return data;
  } catch (e) {
    console.error(e);
    throw new Error("Server error");
  }
}

