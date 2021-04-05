import Layout from "../components/Layout";
import withContext from "../withContext";

function Confirmation({context}) {

    

    return (
        <Layout>
            <div>
                <h1>Order Confirmation</h1>
            </div>
        </Layout>
    )
}

export default withContext(Confirmation)