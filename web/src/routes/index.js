//public pages
import Products from '../pages/Products';
import Product from '../pages/Product';

export const publicRoutes = [
  { path: '/product/:id', name: 'Product', component: Product, exact: false },
  { path: '/', name: 'Products', component: Products, exact: true }
];
