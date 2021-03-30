import withContext from "../withContext";

function CartPreview({context}){
    const findProductById = (id) => {
       let item = context.products.filter(obj => obj.id === id)
       return item[0];
    }
    const renderCartItems = () => {
        return context.cart.map(i => <div key={i.skuId}>
            <p>{findProductById(i.productId).name}</p>
            <img style={{width: "25px"}} src={findProductById(i.productId).frontimg}/>
            </div>)
    }

    return (
        <div>
            <h2>Cart Preview</h2>
            {renderCartItems()}
        </div>
    )
}

export default withContext(CartPreview);