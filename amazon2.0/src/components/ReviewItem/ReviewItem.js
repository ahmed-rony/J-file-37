import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    // console.log(props.product);
    const {name, quantity, img, seller, price, stock, id} = props.product;
    return (
        <div className='review-item'>
            <h3>{name}</h3>
            <img style={{width:'200px', margin:'5px', border:'3px solid #333'}} src={img} />
            <h5>Quantity; {quantity}</h5>
            <small>$ {price}</small>
            <br />
            <button className='product-btn'
                onClick={() => props.handleRemoveProduct(id)}
            >Remove Item</button>

        </div>
    );
};

export default ReviewItem;