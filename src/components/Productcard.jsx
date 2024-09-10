
import React from 'react';

const Productcard = ({ product }) => {
    return (
        <div className="product-card" onClick={() => console.log(product.name)}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            {product.discountPrice ? (
                <p>
                    <span className="discount-price">₹{product.price}</span> <span className="original-price">₹{product.discountPrice}</span>
                </p>
            ) : (
                <p>₹{product.price}</p>
            )}
            <p>Free Delivery</p>
            <div className="product-rating">
                <span>{product.rating}⭐</span>
                <span>{product.reviews} Reviews</span>
            </div>
        </div>
    );
};

export default Productcard;
