type ProductDescriptionType = {
  show: boolean;
  productDetails: string;
};

const Description = ({ show, productDetails }: ProductDescriptionType) => {
  const style = {
    display: show ? 'flex' : 'none'
  };

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Details and product description</h4>

        <p>{productDetails}</p>
      </div>
    </section>
  );
};

export default Description;
