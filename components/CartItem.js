import withContext from '../withContext'

function CartItem({item, context}) {

    const findProductById = (id) => {
        let item = context.products.filter(obj => obj.id === id)
        return item[0];
    }

    return (
        <li 
            key={item.skuId}
            className="cart-item"
            >
                <button className="delete-item">X</button>
                <div className="item-description">
                    <img src={findProductById(item.productId).frontimg}/>
                    <p className="description-text">{findProductById(item.productId).name}</p>
                </div>
                <input type="number" min="0" aria-labelledby="quantity-header"/>
                <div className="item-total">
                    <span></span>
                    <span className="clipped">dollars</span>
                </div>
            </li>
    )
}

export default withContext(CartItem);