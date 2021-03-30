import Layout from "../components/Layout";
import withContext from "../withContext";

function Cart({context}) {
    const renderCartItems = () => {
        return context.cart.map(i => <div key={i}>{i}</div>)
    }
    return (
        <Layout>
        <div>
            <h1>Cart</h1>
            {/* {renderCartItems()} */}
        </div>
        </Layout>
    )
}

export default withContext(Cart);