import Link from 'next/link'

export default function ProductCard({product}){

    const findLowestPrice = () => {
        let prices = product.skus.map(s => s.price)
        return Math.min(...prices);
    }
    return (
        <Link href={{pathname: `/product/${product.id}`}}>
        <a 
            key={product.id}
            className="product-card"
        >
            <h3><span style={{textTransform: "capitalize"}}>{product.brand} - </span>{product.name}</h3>
            <img style={{ width: "100px"}} src={product.frontimg}></img>
            <p>from {findLowestPrice()}$</p>
        </a>
        </Link>
    )
}