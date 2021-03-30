import withContext from "../../withContext";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import ProductForm from "../../components/ProductForm";
import Layout from "../../components/Layout";

function Product({ context }){

    const router = useRouter()
    // use the same naming convention as inside []'s for file
    const { productId } = router.query;

    const [product, setProduct] = useState();
    const [productOption, setProductOption] = useState();
    const [ selectedOption, setSelectedOption ] = useState();
    const [quantity, setQuantity ] = useState("1");

    const addToCart = ( itemObj ) => {
        let currentCart = context.cart;
        let newCart;
        if (context.cart.length < 1){
            newCart = [itemObj];
        }
        else if ( context.cart.some(obj => obj.skuId === itemObj.skuId) ) {
            for(let i = 0; i < currentCart.length; i++){
                if (currentCart[i].skuId === itemObj.skuId) { 
                    currentCart[i].quantity = parseInt(currentCart[i].quantity) + parseInt(itemObj.quantity);
                    newCart = currentCart;
                }
            }
        }
        else {
            newCart = [...currentCart, itemObj]
        }
        context.setCart(newCart);
        localStorage.setItem('cart', JSON.stringify([...newCart]));
    }

    useEffect( () => {
        let foundProduct = context.products.filter(p => p.id === parseInt(productId))
        setProduct(foundProduct[0])
    })

    return (
        <Layout>
        { product ? 
        <div>
            <h1><span style={{ textTransform: "capitalize" }}>{product.brand}</span> - {product.name}</h1>
            <img style={{width: "100px"}} src={product.frontimg}></img>
            <p>{product.additional_specs}</p>
            <ProductForm 
                productOptions={product.product_options[0]}
                setProductOption={setProductOption}
                product={product}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                addToCart={addToCart}
                quantity={quantity}
                setQuantity={setQuantity}
            />
        </div>
        : null }
        </Layout>
    )
}

export default withContext(Product)