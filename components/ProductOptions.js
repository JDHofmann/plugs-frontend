export default function ProductOptions({productOptions}){
    return productOptions.product_option_values.map(po => <p key={po.id}>
        <input 
            value={po.id} 
            id={po.id}
            name="selction"
            type="radio"></input><label htmlFor={po.id}>{po.name}</label>
        </p>);
}