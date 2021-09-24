import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="menu">
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/about">About</a>
                <a href="/contacts">Contacts</a>
            </nav>
        </div>
    );
};

export default Header;