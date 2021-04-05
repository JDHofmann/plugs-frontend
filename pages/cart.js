import CartItem from "../components/CartItem";
import Layout from "../components/Layout";
import withContext from "../withContext";

function Cart({context}) {

    const findProductById = (id) => {
        let item = context.products.filter(obj => obj.id === id)
        return item[0];
    }
    
    const findProductSku = (id, sku) => {
        let product = findProductById(id);
        return product.skus.filter(s => s.id === sku)[0];
    }
    
    const renderCartItems = () => {
        return context.cart.map(i => <CartItem key={i.id} item={i}/>)
    }

    const findPriceSum = () => {
        let result = context.cart.map( item => (
            item.quantity * findProductSku(item.productId, item.skuId).price
        ))
        let sum = result.reduce(function(a, b){
            return a + b;
        }, 0);
        return sum;
    }

    return (
        <Layout>
            <div>
                <h1 className="cart-header">Shopping Cart</h1>
                <div className="cart">
                    <caption className="clipped">
                        <span>Shopping cart, total</span>
                        <span>{findPriceSum()}</span>
                        <span>dollars</span>
                    </caption>
                    <div className="cart-headers">
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
                    </div>
                    <button className="checkout">Checkout</button>
                </div>
            </div>
        </Layout>
    )
}

export default withContext(Cart);