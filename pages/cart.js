import CartItem from "../components/CartItem";
import Layout from "../components/Layout";
import withContext from "../withContext";

function Cart({context}) {

    const renderCartItems = () => {
        return context.cart.map(i => <CartItem item={i}/>)
    }
 
    return (
        <Layout>
            <div>
                <h2>Shopping Cart</h2>
                <div className="cart">
                    <caption className="clipped">
                        <span>Shopping cart, total</span>
                        <span>{}</span>
                        <span>dollars</span>
                    </caption>
                    <div className="cart-headers">
                        <h3>Item</h3>
                        <span></span>
                        <h3>Qty</h3>
                        <h3>Price</h3>
                    </div>
                    <ul className="cart-item-list">
                        {renderCartItems()} 
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default withContext(Cart);