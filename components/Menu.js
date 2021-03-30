import Link from "next/link";

export default function Menu({active}){
    return(
        <nav class={ active === "true" ? "menu menu-active" : "menu"}>
                <ul>
                    <li><h3>Products</h3>
                        <ul>
                            <li><Link href="/"><a>Phones</a></Link></li>
                            <li><Link href="/"><a>Tablets</a></Link></li>
                            <li><Link href="/"><a>Laptops</a></Link></li>
                            <li><Link href="/"><a>TVs</a></Link></li>
                            <li><Link href="/"><a>Smart Watches</a></Link></li>
                            <li><Link href="/"><a>Accessories</a></Link></li>
                        </ul>
                    </li>
                    <li><Link href="/cart"><a>Cart</a></Link></li>
                    <li><Link href="/our-story"><a>Our Story</a></Link></li>
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                </ul>
            </nav>
    )
}