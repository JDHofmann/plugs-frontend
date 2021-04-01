
export default function ProductGallery({product}){

    return(
        <div className="product-image-gallery">
            <div className="product-thumbnails">
                <button className="product-thumbnail"></button>
            </div>
            <div className="product-images">
                <img src={product.frontimg}></img>
            </div>
            
        </div>
    )
}