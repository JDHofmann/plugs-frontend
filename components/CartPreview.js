import withContext from "../withContext";

function CartPreview({context}){

    const renderCartItems = () => {
        return context.cart.map(i => <p>{i.name}</p>)
    }

    return (
        <div>
            <h2>Cart Preview</h2>
            {renderCartItems()}
        </div>
    )
}

export default withContext(CartPreview);