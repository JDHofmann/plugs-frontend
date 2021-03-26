
export default function ProductCard({product}){

    const findLowestPrice = () => {
        return product.skus.reduce((min, p) => p.price < min ? p.price : min, product.skus[0].price);
    }
    return (
        <div 
            key={product.id}
            className="product-card"
        >
            <h3><span>{product.brand} - </span>{product.name}</h3>
            <img style={{ width: "100px"}} src={product.frontimg}></img>
            <p>from {findLowestPrice()}$</p>
        </div>
    )
}