import withContext from "../withContext";

function CartPreview({context}){
    const findItem = (id) => {
       let item = context.products.filter(obj => obj.id === id)
       return item[0];
    }
    const renderCartItems = () => {
        return context.cart.map(i => <div key={i.skuId}>
            <p>{findItem(i.productId).name}</p>
            <img style={{width: "25px"}} src={findItem(i.productId).frontimg}/>
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