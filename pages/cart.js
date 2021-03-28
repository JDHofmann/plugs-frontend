import withContext from "../withContext";

function Cart({context}) {
    const renderCartItems = () => {
        return context.cart.map(i => <div key={i}>{i}</div>)
    }
    return (
        <div>
            <h1>Cart</h1>
            {renderCartItems()}
        </div>
    )
}

export default withContext(Cart);