import withContext from '../withContext';
import { useState } from 'react';

function CartItem({item, context}) {

    const [ quantity, setQuantity ] = useState(item.quantity)

    const findProductById = (id) => {
        let item = context.products.filter(obj => obj.id === id)
        return item[0];
    }

    const findProductSku = (id, sku) => {
        let product = findProductById(id);
        return product.skus.filter(s => s.id === sku)[0];
    }

    const handleQuantityChange = (e) => {
        let currentCart = [...context.contextCart]
        let foundItemIndex = currentCart.findIndex( i => i.skuId === item.skuId)
        // console.log("foundItem = ", foundItemIndex)
        currentCart[foundItemIndex].quantity = e.target.value.toString()
        // console.log(currentCart[foundItemIndex])
        context.setCart(currentCart)
    }

    const handleItemDelete = () => {
        let currentCart = [...context.contextCart]
        let remainingItems = currentCart.filter( i => i.skuId !== item.skuId)
        context.setCart(remainingItems)
    }

    return (
        <li 
            key={item.skuId}
            className="cart-item"
        >
            <button 
                onClick={handleItemDelete}
                className="delete-item"
            >X</button>
            <div className="item-description">
                <img src={findProductById(item.productId).frontimg}/>
                <p className="description-text">{findProductById(item.productId).name}</p>
            </div>
            <input 
                className="item-quantity"
                type="number" min="0" aria-labelledby="quantity-header"
                value={item.quantity}
                onChange={handleQuantityChange}
            />
            
            <div className="item-price">
                <span>{findProductSku(item.productId, item.skuId).price}</span>
                <span className="clipped">dollars</span>
            </div>
        </li>
    )
}

export default withContext(CartItem);