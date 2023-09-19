import { useParams, useSearchParams } from 'react-router-dom';
import { Product } from '~/pages/(main)/products/[id]';

export let defaultId = '1';

export const Products = () => {
  // path: '/products/:productId/*',
  let { id } = useParams(); // if you need add < ...slugs >
  let [searchParams] = useSearchParams();

  /*
   const handleSetSearchParams = () => {
     const newParams = { color: 'red', type: 'lg' };
     const serializedParams = SerializeParamsObject(newParams);
     setSearchParams(serializedParams);
    };
  */

  return <Product id={id!} searchParams={searchParams} />;
};
