import Link from "next/link";
import withContext from "../withContext";
import CartPreview from "./CartPreview";


function Header({context}){
    return (
        <header>
            <h1>HEADER</h1>
            <p>Welcome Back: {context.user.username}</p>
            <Link href="/cart"><a>Cart</a></Link>
            <Link href="/"><a>Home</a></Link>
            <CartPreview />
        </header>
    )
}

export default withContext(Header);