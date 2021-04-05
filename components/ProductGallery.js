import { useState } from 'react';

export default function ProductGallery({product}){

    const [ currentThumbnail, setCurrentThumbnail ] = useState(product.frontimg)

    const handleThumbnailClick = (e) => {
        console.log(e.target.children[0])
        // e.target.matches('img') ?
        setCurrentThumbnail(e.target.children[0].src) 
        // : null
    }

    return(
        <div className="product-image-gallery">
            <div className="product-thumbnails">
                <button 
                    onClick={handleThumbnailClick}
                    className="product-thumbnail"
                >
                    <img src={product.frontimg}/>
                </button>
                <button
                    onClick={handleThumbnailClick} 
                    className="product-thumbnail"
                >
                    <img src={product.backimg}/>
                </button>
                <button 
                    onClick={handleThumbnailClick}
                    className="product-thumbnail"
                >
                    <img src={product.sideimg}/>
                </button>
            </div>
            <div className="product-image">
                <img
                    src={currentThumbnail}></img>
            </div>
            
            
        </div>
    )
}