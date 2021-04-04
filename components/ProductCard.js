import Link from 'next/link'

export default function ProductCard({product}){

    const findLowestPrice = () => {
        let prices = product.skus.map(s => s.price)
        return Math.min(...prices);
    }
    return (
        <li key={product.id} className="product-card">
            <Link href={{pathname: `/product/${product.id}`}}>
            <a>
                <img 
                    src={product.frontimg}
                ></img>
                <h2><span>{product.brand} - </span>{product.name}</h2>
                <p className="product-lowest-price">from {findLowestPrice()}$</p>
            </a>
            </Link>
        </li>
    )
}