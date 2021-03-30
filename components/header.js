import Link from "next/link";
import withContext from "../withContext";
import CartPreview from "./CartPreview";
import { useState } from 'react';

function Header({context}){

    const [ menuOpen, setMenuOpen ] = useState(false)

    const handleMenuClick = () => {
        menuOpen ? 
        setMenuOpen(false) : setMenuOpen(true)
    }

    return (
        <header>
            <button 
            class={ menuOpen ? "burger-btn active" : "burger-btn"}
            onClick={handleMenuClick}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav class={ menuOpen ? "menu menu-active" : "menu"}>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </nav>
            {/* <h1>HEADER</h1>
            <p>Welcome Back: {context.user.username}</p>
            <Link href="/cart"><a>Cart</a></Link>
            <Link href="/"><a>Home</a></Link>
            <CartPreview /> */}
        </header>
    )
}

export default withContext(Header);