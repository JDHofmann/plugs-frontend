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
        setTimeout(() => {setAddToCartButtonText("Success!")}, 2000);
        setTimeout(() => {setAddToCartButtonText("Add To Cart")}, 4000);
    }
    
    return (
        <div>
            <form 
                onSubmit={handleSubmit}
                >
                <fieldset onChange={handleSelectionChange}>
                    <legend>{productOptions.name } options</legend>
                    <ProductOptions productOptions={productOptions} />
                    <Prices 
                        selectedOption={selectedOption}
                        skus={product.skus}
                    />
                </fieldset>
                <label htmlFor="qty">Quantity</label>
                <input 
                    id="qty"
                    type="number"
                    min="1"
                    max="20"
                    value={quantity}
                    onChange={handleQuantityChange} 
                />
                <button className="add-to-cart-btn" type="submit">{addToCartButtonText}</button>
            </form>
        </div>
    )
}