import withContext from "../../withContext";
import { useRouter } from 'next/router'

function Product(){
    const router = useRouter()
    // use the same naming convention as inside []'s for file
    const { productId } = router.query;
    return (
        <div>{productId}</div>
    )
}

export default withContext(Product)