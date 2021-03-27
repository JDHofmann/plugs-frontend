import withContext from "../../withContext";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";

function Product({ context }){

    const router = useRouter()
    // use the same naming convention as inside []'s for file
    const { productId } = router.query;

    const [product, setProduct] = useState();

    useEffect( () => {
        let foundProduct = context.products.filter(p => p.id === parseInt(productId))
        setProduct(foundProduct[0])
    })

    const renderOptionValues = () => {
        return product.product_options[0].product_option_values.map(po => <p>
            <input 
                value={po.id} 
                id={po.id}
                name="selction"
                type="radio"></input><label htmlFor={po.id}>{po.name}</label>
            </p>);
    }

    const renderOption = () => {
        return (
            <form>
                <fieldset>
                <legend>{product.product_options[0].name }</legend>
                {renderOptionValues()}
                </fieldset>
                <button type="submit">Add to Cart</button>
            </form>
        )
        
        // product.product_options.product_option_values.id 
        // product.product_options.product_option_values.name
    }

    return (
        <>
        { product ? 
        <>
            <h1><span style={{ textTransform: "capitalize" }}>{product.brand}</span> - {product.name}</h1>
            <img style={{width: "100px"}} src={product.frontimg}></img>
            <p>{product.additional_specs}</p>
            {renderOption()}
        </>
        : null }
        </>
    )
}

export default withContext(Product)