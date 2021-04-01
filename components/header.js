import Link from "next/link";
import withContext from "../withContext";
import CartPreview from "./CartPreview";
import { useState, useEffect } from 'react';
import Menu from "./Menu";

function Header({context}){

    const [ menuOpen, setMenuOpen ] = useState(false)

    const handleMenuClick = () => {
        // set the scroll lock before opening the menu
        let body = document.querySelector('.content');
        menuOpen ? 
        body.style.position = "static" :  body.style.position = "fixed"
        setMenuOpen(!menuOpen);
    }

    return (
        <>
        <header>
            <button 
            class={ menuOpen ? "burger-btn active" : "burger-btn"}
            onClick={handleMenuClick}
            aria-labelledby="open-main-menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="site-title">
                <Link href="/"><a>C<span>&</span>G</a></Link>
            </div>
            <div className="header-cart">
                <img className="cart-vector" src="/shopping-cart-vector.png"></img>
                {context.cart.length > 0 ? 
                <span className="cart-count">{context.cart.length}</span>
                : null }
            </div>
            {/* <h1>HEADER</h1>
            <p>Welcome Back: {context.user.username}</p>
            <Link href="/cart"><a>Cart</a></Link>
            <Link href="/"><a>Home</a></Link>
        <CartPreview /> */}
        </header>
        <Menu menuOpen={menuOpen} />
        </>
    )
}

export default withContext(Header);