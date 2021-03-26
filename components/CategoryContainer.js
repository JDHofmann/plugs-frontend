import ProductCard from "./ProductCard";

function CategoryContainer({products, title}){

    const renderProductItems = () => {
        return products.map(fp => <ProductCard key={fp.id} product={fp}/>)
    }

    return (
        <div className="category-container">
            <h2>{title}</h2>
            {renderProductItems()}
        </div>
    )
}

export default CategoryContainer;