import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.json';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(15, 30);    // taking only 10 data from the data source;
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getStoredCart();
        const productIds = Object.keys(savedCart);
        const productCart = productIds.map( existingKey => {
            const products = fakeData.find( pd => pd.id === existingKey);  // understasnd what has been done; video: 38/4 & 37/7;
            const product = products || {};
            product.quantity = savedCart[existingKey];  // jhanker just wrote this, but we need also the above line;
            return product;
        });
        setCart(productCart);
        
    }, []);

    const handleAddProduct = (product) => {   // for event handler...this is some particular rule; rules have been changed in video: 38/3;
        const toBeAddedId = product.id;
        const sameProduct = cart.find(pd => pd.id === toBeAddedId);
        let count = 1;
        let newCart;
        if(sameProduct){                    // kuno product-k 2nd time add korle quanitity barbe ei 'if' er maddhome;
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;  // eshob video: 38/3;
            const others = cart.filter(pd => pd.id !== toBeAddedId);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        

        // const newCart = [...cart, product]; NN
        setCart(newCart);
        // const sameProduct = cart.filter(pd => pd.id === product.id);  NN
        // const count = sameProduct.length;  NN
        addToDb(product.id, count);
    }
    // =============================================================;
    
    return (
        <div className='container'>
            <div className="product-container">
                {
                    products.map(pd => 
                    <Product 
                        product = {pd}
                        handleAddProduct = {handleAddProduct}
                        showAddToCart={true}
                        key={pd.id}
                        >
                    </Product>)
                }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                    <button className='main-btn'><FontAwesomeIcon icon={faShoppingCart} /> Review Order</button>
                    </Link>
                </Cart>
                
            </div>
        </div>
    );
};

export default Shop;