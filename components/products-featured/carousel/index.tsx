import ProductItem from './../../product-item';
import { ProductTypeList } from 'types';

// import Swiper core and required components
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';

let slidesPerView = 1.3;
let centeredSlides = true;
let spaceBetween = 30;
if (process.browser) {
  if (window.innerWidth > 768) {
    slidesPerView = 3;
    spaceBetween = 35;
    centeredSlides = false;
  }
  if (window.innerWidth > 1024) {
    slidesPerView = 4;
    spaceBetween = 65;
    centeredSlides = false;
  }
}

const ProductsCarousel = () => {
  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data, error } = useSWR('/api/products', fetcher);

  if (error) return <div>Loading</div>;

  return (
    <div className="products-carousel">
      <Swiper
        spaceBetween={spaceBetween}
        loop={true}
        centeredSlides={centeredSlides}
        watchOverflow={true}
        slidesPerView={slidesPerView}
        className="swiper-wrapper"
      >
        {data.products.map((item: ProductTypeList) => (
          <SwiperSlide key={item.id}>
            <ProductItem
              id={item.id}
              name={item.name}
              price={item.price}
              key={item.id}
              ratings={item.ratings}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsCarousel;
