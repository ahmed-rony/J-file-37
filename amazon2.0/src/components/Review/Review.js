import React, { useEffect, useState } from 'react';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import fakeData from '../../fakeData/products.json';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import gif from '../../images/giphy.gif';


const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);         // cart array also cleaned;
        setOrderPlaced(true);
        clearTheCart();      // clearing the storage;
    }

    const handleRemoveProduct = (product) => {
        console.log('removed' ,product)
        const newCart = cart.filter(pd => pd.id !== product);  // video: 38/1; jetake click kora hoiche seta baade sobaike rekhe ekta array/state declare kora hoyeche;
        setCart(newCart);
        // removeFromDb(product);
        removeFromDb(product);
    }

    useEffect( () => {
        //  cart data;
        const savedCart = getStoredCart();
        const productIds = Object.keys(savedCart);
        const productCart = productIds.map( key => {
            const products = fakeData.find( pd => pd.id === key);  // understasnd what has been done; video: 37/7;
            const product = products || {};
            product.quantity = savedCart[key];  // jhanker just wrote this, but we need also the above line;
            return product;
        });
        setCart(productCart);
        // console.log(productCart);
    });

    let thankyouNote;
    if(orderPlaced){
        thankyouNote = <img src={gif} />
    }


    return (
        <div className='review-container'>
            <h1 style={{color:'#fff', background:'#333652', padding:'25px 0', textAlign:'center'}}>Review order: {cart.length}</h1>
            <div className="container">
                <div className="product-container">
                    {
                    cart.map( pd => <ReviewItem product={pd} key={pd.id} handleRemoveProduct={handleRemoveProduct} ></ReviewItem>)
                    }
                    {
                        thankyouNote
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <button className='main-btn' onClick={handlePlaceOrder}>Place Order</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Review;