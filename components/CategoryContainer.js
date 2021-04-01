import ProductCard from "./ProductCard";

function CategoryContainer({products, title, id}){

    const renderProductItems = () => {
        return products.map(fp => <ProductCard key={fp.id} product={fp}/>)
    }

    return (
        <div className="category-container" id={id}>
            <h2>{title}</h2>
            {renderProductItems()}
        </div>
    )
}

export default CategoryContainer;