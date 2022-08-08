import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, img, seller, price, stock, id} = props.product;
    // console.log(props)
    
    return (
        <div className='product'>
            <div>
                <img className='product-img' src={img} />
            </div>
                <div className='product-info'>
                <h4><Link to={"/product/"+id}  className='product-name'>{name}</Link> </h4>
                <p><small>by: {seller}</small></p>
                <p className='product-price'>$ {price}</p>
                <p className='product-stock'><small>Only {stock} items left in stock - Grab it now</small></p>
                {/* conditionally shop e button ache. kintu product details e nai. eta if/else/ other condition diew kora jay */}
                {props.showAddToCart && <button className="product-btn" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}

            </div>
            <div></div>
        </div>
    );
};

export default Product;