import React from 'react';
import { Link } from 'react-router-dom';

import data from '../../data';

import './ProductArea.css';

function ProductArea() {
  return (
    <div>
      <main className='main'>
        <div className='content'>
          <ul className='products'>
            {data.products.map((product) => (
              <li>
                <div className='product'>
                  <Link to={'/product/' + product.id}>
                    <img
                      src={product.image}
                      alt='product'
                      className='product-image'
                    />
                  </Link>
                  <div className='product-name'>
                    <Link to={'/product/' + product.id}>{product.name}</Link>
                  </div>
                  <div className='product-brand'>{product.brand}</div>
                  <div className='product-price'>${product.price}</div>
                  <div className='product-ratings'>
                    {product.rating} Stars ({product.numReviews} Reviews)
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default ProductArea;
