import React from 'react'
import Card from './Card';
import Rating from "react-rating"
import { Link } from "react-router-dom";


function Product({product}) {
  console.log(product.id)
  
  return (
    //   <div className="col-md-3 m-5 card">
    //     <img src={product.image} className="img-fluid" alt="" />
    //     <h1>{product.name}</h1>
    //     <h1>Rating : {product.rating}</h1>
    //     <h1>price:{product.price}</h1>
    //   </div>

    <Card className="text-left">
      <Link to={`product/${product.id}`} className="link">
        <img src={product.image} className="img-fluid" alt="" />
        <h1>{product.name}</h1>
         <Rating
         initialRating={product.rating}
          emptySymbol="fa fa-star-o fa-1x"
          fullSymbol="fa fa-star fa-2x"
          readonly={true}
           />
        <h1>price:{product.price}</h1>
      </Link>
    </Card>
  );
}

export default Product