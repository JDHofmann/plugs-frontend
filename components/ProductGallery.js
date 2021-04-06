import { useState } from 'react';

export default function ProductGallery({product}){

    const [ currentThumbnail, setCurrentThumbnail ] = useState(product.frontimg)

    const handleThumbnailClick = (e) => {
        e.target.matches('img') ?
        setCurrentThumbnail(e.target.src)
        : setCurrentThumbnail(e.target.children[0].src)
    }

    return(
        <div className="product-image-gallery">
            <div 
                onClick={handleThumbnailClick}
                className="product-thumbnails" >
                <button 
                    // onClick={handleThumbnailClick}
                    className="product-thumbnail"
                >
                    <img src={product.frontimg}/>
                </button>
                <button
                    // onClick={handleThumbnailClick} 
                    className="product-thumbnail"
                >
                    <img src={product.backimg}/>
                </button>
                <button 
                    // onClick={handleThumbnailClick}
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