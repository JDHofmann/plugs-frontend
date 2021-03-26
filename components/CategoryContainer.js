
function CategoryContainer({products, title}){

    const renderProductItems = () => {
        return products.map(fp => <p>{fp.name}</p>)
    }

    return (
        <div>
            <h2>{title}</h2>
            {renderProductItems()}
        </div>
    )
}

export default CategoryContainer;