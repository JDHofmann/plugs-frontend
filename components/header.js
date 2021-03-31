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
            <Menu menuOpen={menuOpen} />
            {/* <h1>HEADER</h1>
            <p>Welcome Back: {context.user.username}</p>
            <Link href="/cart"><a>Cart</a></Link>
            <Link href="/"><a>Home</a></Link>
            <CartPreview /> */}
        </header>
    )
}

export default withContext(Header);