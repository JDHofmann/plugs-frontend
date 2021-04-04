import { useEffect, useState } from 'react';
import Layout from "../../components/Layout";
import { useRouter } from 'next/router';
import withContext from "../../withContext";
import ProductCard from "../../components/ProductCard";


function Category({context}){

    const router = useRouter();
    const { categoryName } = router.query;
    const [ category, setCategory ] = useState([]);

    useEffect( () => {
                let foundCategory = context.products.filter( p => p.category === categoryName);
                setCategory(foundCategory);
    }, [context.products])
    
    const renderProductItems = () => {
        return category.map(fp => <ProductCard key={fp.id} product={fp}/>)
    }
    
    return(
        <Layout>
            { category.length > 0 ?
            <div>
                <h1 className="category-header">{categoryName}</h1>
                <ul className="category-product-list">
                {renderProductItems()}
                </ul>
            </div>
                :
                <p className="loading">loading...</p>
            }
        </Layout>
    )
}

export default withContext(Category);