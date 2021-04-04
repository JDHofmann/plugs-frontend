import Link from "next/link";
import withContext from "../withContext";
import CartPreview from "./CartPreview";
import { useState, useEffect } from 'react';
import Menu from "./Menu";

function Header({context}){

    const [ menuOpen, setMenuOpen ] = useState(false);
    const [ cartPreview, setCartPreview ] = useState(false);

    const lockScroll = () => {
        // set the scroll lock before opening the menu
        let body = document.querySelector('.content');
        menuOpen ? 
        body.style.position = "static" :  body.style.position = "fixed"
    }

    const handleMenuToggle = () => {
        cartPreview ? setCartPreview(false) : null
        lockScroll();
        setMenuOpen(!menuOpen);
    }

    const handleCartPreviewClick = () => {
        menuOpen ? handleMenuToggle() : null
        setCartPreview(!cartPreview)
    }

    return (
        <>
        <header>
            <button 
            className={ menuOpen ? "burger-btn active" : "burger-btn"}
            onClick={handleMenuToggle}
            aria-labelledby="open-main-menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <Menu menuOpen={menuOpen} />
            <div className="site-title">
                <Link href="/"><a>C<span>&</span>G</a></Link>
            </div>
            <CartPreview cartPreview={cartPreview}/>
            <button 
                className="header-cart"
                onClick={handleCartPreviewClick}
            >
                <img className="cart-vector" src="/shopping-cart-vector.png"></img>
                {context.cart.length > 0 ? 
                <span className="cart-count">{context.cart.length}</span>
                : null }
            </button>
        </header>
        </>
    )
}

export default withContext(Header);