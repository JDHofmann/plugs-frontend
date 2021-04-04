import CartItem from "../components/CartItem";
import Layout from "../components/Layout";
import withContext from "../withContext";

function Cart({context}) {

    const renderCartItems = () => {
        return context.cart.map(i => <CartItem key={i.id} item={i}/>)
    }

    const findPriceSum = () => {
        // map over each cart item
    }
 
    return (
        <Layout>
            <div>
                <h1 className="cart-header">Shopping Cart</h1>
                <div className="cart">
                    <caption className="clipped">
                        <span>Shopping cart, total</span>
                        <span>{}</span>
                        <span>dollars</span>
                    </caption>
                    <div className="cart-headers">
                        <h2>Item</h2>
                        <span></span>
                        <h2>Qty</h2>
                        <h2>Price</h2>
                    </div>
                    <ul className="cart-item-list">
                        {renderCartItems()} 
                    </ul>
                    <div className="total">
                        <span>Total</span>
                        <span>{}</span>
                    </div>
                    <button className="checkout">Checkout</button>
                </div>
            </div>
        </Layout>
    )
}

export default withContext(Cart);