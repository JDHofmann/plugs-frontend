
export default function ProductCard({product}){
    return (
        <div 
            key={product.id}
            className="product-card"
        >
            <h3><span>{product.brand} - </span>{product.name}</h3>
            <img style={{ width: "100px"}} src={product.frontimg}></img>
        </div>
    )
}