import Link from "next/link";

export default function Menu({menuOpen}){
    return(
        <nav 
            class={ menuOpen ? "main-menu main-menu-active" : "main-menu"}
            role="main menu"
        >
            <ul>
                <li className="main-menu-item"><h3>Products</h3>
                    <ul>
                        <li><Link href="/"><a>Phones</a></Link></li>
                        <li><Link href="/"><a>Tablets</a></Link></li>
                        <li><Link href="/"><a>Laptops</a></Link></li>
                        <li><Link href="/"><a>TVs</a></Link></li>
                        <li><Link href="/"><a>Smart Watches</a></Link></li>
                        <li><Link href="/"><a>Accessories</a></Link></li>
                    </ul>
                </li>
                <li className="main-menu-item"><Link href="/cart"><a>Cart</a></Link></li>
                <li className="main-menu-item"><Link href="/our-story"><a>Our Story</a></Link></li>
                <li className="main-menu-item"><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
        </nav>
    )
}