import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("./product.JSON")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const hadleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

    }
    return (
        <div className="container">
            <div className="left-part">
                {
                    products.map(product => <Product product={product} hadleAddToCart={hadleAddToCart}></Product>)
                }
            </div>
            <div className="right-part">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;