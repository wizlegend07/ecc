import React from 'react'
import Card from './Card';
import { Link } from "react-router-dom";

function Product({product}) {
  
  return (
    //   <div className="col-md-3 m-5 card">
    //     <img src={product.image} className="img-fluid" alt="" />
    //     <h1>{product.name}</h1>
    //     <h1>Rating : {product.rating}</h1>
    //     <h1>price:{product.price}</h1>
    //   </div>

    <Card>
      <Link to={"product/${product.id}"} className="link">
        <img src={product.image} className="img-fluid" alt="" />
        <h1>{product.name}</h1>
        <h1>{product.id}</h1>
        <h1>Rating : {product.rating}</h1>
        <h1>price:{product.price}</h1>
      </Link>
    </Card>
  );
}

export default Product