import { useState } from "react";
import Prices from "./Prices";

export default function ProductOption({productOptions, product}){

    const [ selectedOption, setSelectedOption ] = useState();

    const handleSelectionChange = (e) => {
        let selected = parseInt(e.target.value)
        setSelectedOption(selected)
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
            <form onChange={handleSelectionChange}>
                <fieldset>
                <legend>{productOptions.name }</legend>
                {renderOptionValues(productOptions)}
                </fieldset>
                <button type="submit">Add to Cart</button>
            </form>
            <Prices 
                selectedOption={selectedOption}
                skus={product.skus}
            />
        </div>
    )
}