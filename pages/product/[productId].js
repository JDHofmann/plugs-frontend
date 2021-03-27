import withContext from "../../withContext";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import ProductOption from "../../components/ProductOption";

function Product({ context }){

    const router = useRouter()
    // use the same naming convention as inside []'s for file
    const { productId } = router.query;

    const [product, setProduct] = useState();
    const [productOption, setProductOption] = useState();
    const [ selectedOption, setSelectedOption ] = useState();

    const addToCart = () => {
        console.log(selectedOption)
    }

    useEffect( () => {
        let foundProduct = context.products.filter(p => p.id === parseInt(productId))
        setProduct(foundProduct[0])
    })

    return (
        <>
        { product ? 
        <div>
            <h1><span style={{ textTransform: "capitalize" }}>{product.brand}</span> - {product.name}</h1>
            <img style={{width: "100px"}} src={product.frontimg}></img>
            <p>{product.additional_specs}</p>
            <ProductOption 
                productOptions={product.product_options[0]}
                setProductOption={setProductOption}
                product={product}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                addToCart={addToCart()}
            />
        </div>
        : null }
        </>
    )
}

export default withContext(Product)