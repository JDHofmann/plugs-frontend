import withContext from "../withContext";

function CartPreview({cartPreview, context}){
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
        <>
        { cartPreview? 
        <div>
            <h2>Cart Preview</h2>
            {renderCartItems()}
        </div>
        : null
         }
        </>
    )
}

export default withContext(CartPreview);