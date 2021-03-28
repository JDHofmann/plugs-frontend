import Prices from "./Prices";

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
    }

    const renderOptionValues = (productOptions) => {
        return productOptions.product_option_values.map(po => <p key={po.id}>
            <input 
                value={po.id} 
                id={po.id}
                name="selction"
                type="radio"></input><label htmlFor={po.id}>{po.name}</label>
            </p>);
    }

    return (
        <div>
            <form 
                onSubmit={handleSubmit}
                >
                <fieldset onChange={handleSelectionChange}>
                <legend>{productOptions.name }</legend>
                {renderOptionValues(productOptions)}
                </fieldset>
                <input 
                    id="qty"
                    type="number"
                    min="1"
                    max="20"
                    value={quantity}
                    onChange={handleQuantityChange} 
                />
                <label htmlFor="qty">Quantity</label>
                <button type="submit">Add to Cart</button>
            </form>
            <Prices 
                selectedOption={selectedOption}
                skus={product.skus}
            />
        </div>
    )
}