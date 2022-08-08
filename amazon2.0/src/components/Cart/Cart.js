import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce( (total, product) => total + product.price, 0);
    
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
        // debugger;
    }
    // ==================================;
    let shipping = 0;
    if(total > 40){
        shipping = 0;
    }
    else if(total >= 1){
        shipping = 12.99;
    }
    else if (total > 20){
        shipping = 8.99;
    }
    // ==================================;
    const tax = (total / 10).toFixed(2);
    const grandTotal =(total + shipping + Number(tax))
    return (
        <div>
            <h2>Order summery</h2>
            <p>Items Ordered: {(cart.length)}</p>
            <p>Product Price: {(total).toFixed(2)}</p>
            <p>Shipping cost: {(shipping).toFixed(2)}</p>
            <p>Tax: {tax}</p>
            <p>Total Price: {(grandTotal).toFixed(2)}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;