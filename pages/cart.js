import CartItems from "../components/CartItems";
import ConfirmationModal from "../components/ConfirmationModal";
import Layout from "../components/Layout";
import withContext from "../withContext";
import { useState } from 'react'

function Cart({context}) {

    const [ confirmationModal, setConfirmationModal ] = useState(false)
    const [ confirmationData, setConfirmationData ] = useState()

    const findProductById = (id) => {
        let item = context.products.filter(obj => obj.id === id)
        return item[0];
    }
    
    const findProductSku = (id, sku) => {
        let product = findProductById(id);
        return product.skus.filter(s => s.id === sku)[0];
    }

    const findPriceSum = () => {
        let result = context.contextCart.map( item => (
            item.quantity * findProductSku(item.productId, item.skuId).price
        ))
        let sum = result.reduce(function(a, b){
            return a + b;
        }, 0);
        return sum;
    }

    const createSkus = (cart) => {
        return cart.map( item => ({sku: item.skuId, quantity: parseInt(item.quantity)}))
    }

    const handleSubmit = () => {
        let options = {
            method: "POST",
            headers: {
                "content-type":"application/json",
                "accept":"application/json"
            },
            body: JSON.stringify({
                skus: createSkus(context.contextCart),
                user_id: context.user.id
            })
        }
        fetch("http://localhost:3000/orders", options)
        .then(response => response.json())
        .then(data => {
            // <ConfirmationModal reciept={data} />
            setConfirmationModal(true);
            setConfirmationData(data);
            context.setCart([])
        })
    }

    return (
        <Layout>
            <div>
                { confirmationModal ? 
                <ConfirmationModal 
                    reciept={confirmationData} 
                    setConfirmationModal={setConfirmationModal}
                />
                : null
                }
                <h1 className="cart-header">Shopping Cart</h1>
                <div className="cart">
                    <caption className="clipped">
                        <span>Shopping cart, total</span>
                        <span>{findPriceSum()}</span>
                        <span>dollars</span>
                    </caption>
                    <CartItems 
                        findProductById={findProductById}
                        findPriceSum={findPriceSum}
                    />
                    {/* <div className="cart-headers">
                        <h2 className="item-header">Item</h2>
                        <span></span>
                        <h2>Qty</h2>
                        <h2>Price</h2>
                    </div>
                    <ul className="cart-item-list">
                        {renderCartItems()} 
                    </ul>
                    <div className="total">
                        <span>Total</span>
                        <span>{findPriceSum()}</span>
                    </div> */}

                    <button
                        type="submit" 
                        onClick={handleSubmit}
                        className="checkout"
                    >Checkout</button>
                </div>
            </div>
        </Layout>
    )
}

export default withContext(Cart);