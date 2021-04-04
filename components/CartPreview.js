import withContext from "../withContext";
import Link from "next/link";

function CartPreview({cartPreview, context}){
    const findProductById = (id) => {
       let item = context.products.filter(obj => obj.id === id)
       return item[0];
    }
    const renderCartItems = () => {
        if(context.cart.length < 1){
            return <p>You have no items in your cart</p>
        }
        return context.cart.map(i => <li key={i.skuId}>
            <p className="product-name">{findProductById(i.productId).name}</p>
            <img src={findProductById(i.productId).frontimg}/>
            </li>)
    }

    return (
        <div className={ cartPreview ? "cart-preview-container cart-preview-active" : "cart-preview-container" }>
            <ul>
            <h2>Shopping Cart Items</h2>
                {renderCartItems()}
            <Link href="/cart">
                <a className="checkout-link">Checkout</a>
            </Link>
            </ul>
        </div>
    )
}

export default withContext(CartPreview);