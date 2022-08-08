import React from 'react';
import { useParams } from "react-router-dom";
import fakeData from '../../fakeData/products.json';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productId} = useParams();
    const product = fakeData.find(pd => pd.id === productId);
    // console.log(fakeData.find(e => e.id === productId))
    // console.log(product)
        
    return (
        <div>
            <h3>{productId} Info / Details</h3>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;