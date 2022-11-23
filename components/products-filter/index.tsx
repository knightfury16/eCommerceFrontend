import { useState } from 'react';
import Checkbox from './form-builder/checkbox';
import Slider from 'rc-slider';

// data
import {category} from './../../utils/constants'

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const ProductsFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const addQueryParams = () => {
    // query params changes
  };

  return (
    <form className="products-filter" onChange={addQueryParams}>
      <button
        type="button"
        onClick={() => setFiltersOpen(!filtersOpen)}
        className={`products-filter__menu-btn ${
          filtersOpen ? 'products-filter__menu-btn--active' : ''
        }`}
      >
        Add Filter <i className="icon-down-open"></i>
      </button>

      <div
        className={`products-filter__wrapper ${
          filtersOpen ? 'products-filter__wrapper--open' : ''
        }`}
      >
        <div className="products-filter__block">
          <button type="button">Product type</button>
          <div className="products-filter__block__content">
            {category.map(type => (
              <Checkbox key={type} name="product-type" label={type} />
            ))}
          </div>
        </div>

        <div className="products-filter__block">
          <button type="button">Price</button>
          <div className="products-filter__block__content">
            <Range min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
          </div>
        </div>

        <div className="products-filter__block">
          <button type="button">Rating</button>
          <div className="products-filter__block__content">
            <Range min={1} max={5} defaultValue={[5]} tipFormatter={value => `${value}`} />
          </div>
        </div>
        <div className="products-filter__block">
          <button type="submit" className="btn btn-submit btn--rounded btn--yellow">
            Apply
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProductsFilter;
