import React from 'react';
import "./Product.css"

const Product = (props) => {
    //console.log(props);

    return (
        <div className="product-part">
            <img className="img-fluid w-100" src={props.product.image} alt="" />
            <h5 className=" mt-5">{props.product.title}</h5>
            <p>{props.product.description.slice(0, 100)}</p>
            <div className="rate-part">
                <div className="price"><p>Price: {props.product.price}</p></div>
                <div><p>Rating: {props.product.rating.rate}</p></div>
            </div>
            <div onClick={() => props.hadleAddToCart(props.product)} className="btn btn-danger text-center">AddToCart</div>


        </div>
    );
};

export default Product;