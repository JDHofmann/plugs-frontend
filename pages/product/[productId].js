import withContext from "../../withContext";
import { useRouter } from 'next/router'

function Product({ context }){
    const router = useRouter()
    // use the same naming convention as inside []'s for file
    const { productId } = router.query;

    const findProduct = () => {
      let product = context.products.filter(p => p.id === parseInt(productId))
      console.log(product[0])
      return product[0]
    }
    
    return (
        <>
        { context.products.length > 0 ? 
        <>
        <h1>{findProduct().id}</h1>
        <p>{findProduct().additional_specs}</p>
        </>
        : null }
        </>
    )
}

export default withContext(Product)