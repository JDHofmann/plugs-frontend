import withContext from "../withContext";

function CartPreview({cartPreview, context}){
    const findProductById = (id) => {
       let item = context.products.filter(obj => obj.id === id)
       return item[0];
    }
    const renderCartItems = () => {
        return context.cart.map(i => <li key={i.skuId}>
            <p>{findProductById(i.productId).name}</p>
            <img style={{width: "25px"}} src={findProductById(i.productId).frontimg}/>
            </li>)
    }

    return (
        <>
        <div className={ cartPreview ? "cart-preview-container cart-preview-active" : "cart-preview-container" }>
            <ul>
            <h2>Shopping Cart Items</h2>
                {renderCartItems()}
            </ul>
        </div>
        </>
    )
}

export default withContext(CartPreview);