import withContext from "../withContext";
import CartPreview from "./CartPreview";


function Header({context}){
    return (
        <header>
            <h1>HEADER</h1>
            <p>Welcome Back: {context.user.username}</p>
            <CartPreview />
        </header>
    )
}

export default withContext(Header);