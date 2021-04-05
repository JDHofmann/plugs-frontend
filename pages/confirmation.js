import ConfirmationItem from "../components/ConfirmationItem";
import Layout from "../components/Layout";
import withContext from "../withContext";

function Confirmation({context}) {

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

    const renderConfirmationItems = () => {
        if(context){
        let reciept = context.user.order_reciepts[context.user.order_reciepts.length -1]
        console.log(reciept)
        return reciept.order_items.map(i => <ConfirmationItem 
            key={i.id} 
            item={i}
            findProductById={findProductById}
            findProductSku={findProductSku}
        />)
        }
    }

    return (
        <Layout>
            <div>
                <h1 className="cart-header">Order Confirmation</h1>
                <div className="cart">
                    <caption className="clipped">
                        <span>Order, total</span>
                        <span>{findPriceSum()}</span>
                        <span>dollars</span>
                    </caption>
                    {/* <CartItems 
                        findProductById={findProductById}
                        findPriceSum={findPriceSum}
                    /> */}
                    <div className="cart-headers">
                        <h2 className="item-header">Item</h2>
                        <span></span>
                        <h2>Qty</h2>
                        <h2>Price</h2>
                    </div>
                    <ul className="cart-item-list">
                        {renderConfirmationItems()} 
                    </ul>
                    <div className="total">
                        <span>Total</span>
                        <span>{findPriceSum()}</span>
                    </div>

                    {/* <button
                        type="submit" 
                        onClick={handleSubmit}
                        className="checkout"
                    >Checkout</button> */}
                </div>
            </div>
        </Layout>
    )
}

export default withContext(Confirmation)