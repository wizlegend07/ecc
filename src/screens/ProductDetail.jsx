import React from 'react'
import Products from '../product/products'


export default function Productdetail({Products}) {
    const productid = Products.params.id
        return (
        <div>
            <h1>Product details</h1>
            <h1>The Product Id is {productid}  </h1>

        </div>
    )
}
