import Link from "next/link";

export default function Menu({menuOpen}){

    return(
        <nav 
            class={ menuOpen ? "main-menu main-menu-active" : "main-menu"}
            role="main menu"
        >
            <ul className="top-level-list">
                <li className="main-menu-item shop"><h3>Shop</h3>
                    <ul className="sub-list"
                    >
                        <li><Link href="/phones"><a>Phones</a></Link></li>
                        <li><Link href="/tablets"><a>Tablets</a></Link></li>
                        <li><Link href="/laptops"><a>Laptops</a></Link></li>
                        <li><Link href="/tvs"><a>TVs</a></Link></li>
                        <li><Link href="/smart-watches"><a>Smart Watches</a></Link></li>
                        <li><Link href="/accessories"><a>Accessories</a></Link></li>
                    </ul>
                </li>
                <li className="main-menu-item"><Link href="/cart"><a>Cart</a></Link></li>
                <li className="main-menu-item"><Link href="/our-story"><a>Our Story</a></Link></li>
                <li className="main-menu-item"><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
        </nav>
    )
}