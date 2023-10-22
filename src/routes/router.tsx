import { RouteObject, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";

export type Route = RouteObject & {title: string}

export const routes: Route[] = [
    {
      path: "/",
      element: <Home />,
      title: "Home",
    },
    {
        path: "/products",
        element: <Products />,
        title: "Products",
    },
  ]

const router = createBrowserRouter(routes);

export default router;