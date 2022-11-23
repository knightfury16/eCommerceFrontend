import useSwr from 'swr';
import ProductItem from '../../product-item';
import ProductsLoading from './loading';
import { ProductTypeList } from 'types';

const ProductsContent = () => {
  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data, error } = useSwr('/api/products', fetcher);

  console.log("My data will be here",data)

  if (error) return <div>Failed to load users</div>;
  return (
    <>
      {!data && <ProductsLoading />}

      {data && (
        <section className="products-list">
          {data.products.map((item: ProductTypeList) => (
            <ProductItem
              id={item.id}
              name={item.name}
              price={item.price}
              ratings={item.ratings}
              key={item.id}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default ProductsContent;
