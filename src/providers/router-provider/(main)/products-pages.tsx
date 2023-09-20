import { RouteObject } from 'react-router-dom';
import { ProductLayout } from '~/pages/(main)/products/layout.tsx';
import { Product } from '~/pages/(main)/products/[id]';
import { defaultId, Products } from '~/pages/(main)/products';

export const ProductsPage: RouteObject = {
  path: '/products',
  element: <ProductLayout />,
  children: [
    {
      index: true,
      element: <Product id={defaultId} />,
    },
    {
      path: ':id/*',
      element: <Products />,
    },
  ],
};
