import React from 'react'
import Products from '../product/products'
import Product from './Product';


export default function HomeScreen() {
  return (
    <div>
      <div className="row justify-content-center">
        {Products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}
