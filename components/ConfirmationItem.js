
export default function ConfirmationItem({item, findProductById, findProductSku}) {
    return (
        <li 
            key={item.skuId}
            className="cart-item"
        >
            <button 
                // onClick={handleItemDelete}
                className="delete-item"
            >X</button>
            <div className="item-description">
                {/* <img src={findProductById(item.productId).frontimg}/> */}
                <p className="description-text">{item.item_name}</p>
            </div>
            <input 
                className="item-quantity"
                type="number" min="0" aria-labelledby="quantity-header"
                value={item.quantity}
                // onChange={handleQuantityChange}
            />
            
            <div className="item-price">
                <span>{findProductSku(item.productId, item.skuId).price}</span>
                <span className="clipped">dollars</span>
            </div>
        </li>
    )
}