import withContext from "../withContext";
import CartItem from "../components/CartItem";

function CartItems({
    context, 
    findPriceSum
}){
    
    const renderCartItems = () => {
        return context.contextCart.map(i => <CartItem key={i.skuId} item={i}/>)
    }

    return (
        <>
        <div className="cart-headers">
            <h2 className="item-header">Item</h2>
            <span></span>
            <h2>Qty</h2>
            <h2>Price</h2>
        </div>
        <ul className="cart-item-list">
            {renderCartItems()} 
        </ul>
        <div className="total">
            <span>Total</span>
            <span>{findPriceSum()}</span>
        </div>
        </>
    )
}

export default withContext(CartItems);