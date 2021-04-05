import withContext from '../withContext'

function CartItem({item, context}) {

    const findProductById = (id) => {
        let item = context.products.filter(obj => obj.id === id)
        return item[0];
    }

    const findProductSku = (id, sku) => {
        let product = findProductById(id);
        return product.skus.filter(s => s.id === sku)[0];
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
            <input 
                className="item-quantity"
                type="number" min="0" aria-labelledby="quantity-header"
                value={item.quantity}
            />
            
            <div className="item-price">
                <span>{findProductSku(item.productId, item.skuId).price}</span>
                <span className="clipped">dollars</span>
            </div>
        </li>
    )
}

export default withContext(CartItem);