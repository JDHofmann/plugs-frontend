import Prices from "./Prices";
import { useState } from "react";
import ProductOptions from "./ProductOptions";


export default function ProductForm(
    {
        productOptions,
        product, 
        selectedOption, 
        setSelectedOption, 
        addToCart,
        quantity,
        setQuantity
    }
    ){

    const [ addToCartButtonText, setAddToCartButtonText ] = useState("Add To Cart")

    const handleSelectionChange = (e) => {
        let optionSelected = parseInt(e.target.value)
        setSelectedOption(optionSelected)
    }

    const handleQuantityChange = (e) => {
        let quantitySelected = parseInt(e.target.value)
        setQuantity(quantitySelected)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addToCart({
            skuId: selectedOption,
            productId: product.id,
            quantity: quantity
        });
        setAddToCartButtonText("Adding To Cart...");
        setTimeout(() => {
            setAddToCartButtonText("Success!")
        }, 2000);
        setTimeout(() => {setAddToCartButtonText("Add To Cart")}, 4000);
    }

    return (
        <form 
            className="product-form"
            onSubmit={handleSubmit}
            >
            <fieldset onChange={handleSelectionChange}>
                <legend>choose a {productOptions.name } option</legend>
                <div className="product-option-values values"><ProductOptions productOptions={productOptions} /></div>
                <div className="product-option-values value-prices"><Prices 
                    selectedOption={selectedOption}
                    skus={product.skus}
                /></div>
            </fieldset>
            <label className="product-qty" htmlFor="qty">Quantity</label>
            <input 
                className="product-qty"
                id="qty"
                type="number"
                min="1"
                max="20"
                value={quantity}
                onChange={handleQuantityChange} 
            />
            <button 
                className={ addToCartButtonText === "Success!" ? "add-to-cart-btn brand": "add-to-cart-btn"} 
                type="submit"
            >{addToCartButtonText}</button>
        </form>
    )
}