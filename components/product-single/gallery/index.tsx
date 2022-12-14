type GalleryProductType = {
  images?: string[]
}

const Gallery = ({ images }: GalleryProductType) => {

  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
          <div key='mika' className="product-gallery__thumb">
            <img src={'/images/products/product-1.jpg'} alt="" />
          </div>
      </div>

      <div className="product-gallery__image">
        <img src={'/images/products/product-1.jpg'} alt="" />
      </div>
    </section>
  );
};
  
export default Gallery;
  