import React from 'react'
import { useParams } from "react-router-dom";
import Products from '../product/products'





export default function Productdetail() {
  
    const productid = useParams()

    const product = Products.find(({id})  => id === productid); 
    console.log(product);
        return (
          <div>
            <h1>Product details</h1>
            <h1>The Product Id is {productid.id} </h1>
            {/* <h1>{product.id}</h1> */}

           
            
          </div>
        );
}
