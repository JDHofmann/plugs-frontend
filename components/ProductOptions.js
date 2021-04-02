export default function ProductOptions({productOptions}){
    return productOptions.product_option_values.map(po => <p className="product-option-value" key={po.id}>
        <label htmlFor={po.id}>{po.name}</label>
        <input 
            value={po.id} 
            id={po.id}
            name="selction"
            type="radio" 
        />
        </p>);
}