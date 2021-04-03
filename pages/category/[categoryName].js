import { useEffect, useState } from 'react';
import Layout from "../../components/Layout";
import { useRouter } from 'next/router';
import withContext from "../../withContext";
import ProductCard from "../../components/ProductCard";


function Category({context, stars}){

    const router = useRouter();
    const { categoryName } = router.query;
    const [ category, setCategory ] = useState([]);

    // const findCategory = () => {
    //     return context.length > 0 ?
    //     context.products.filter( p => p.category === categoryName) 
    //     : null
    // //     setCategory(foundCategory);
    // }

    useEffect( () => {
                let foundCategory = context.products.filter( p => p.category === categoryName);
                setCategory(foundCategory);
                console.log("rendering")
    }, [context.products])

    
    const renderProductItems = () => {
        return category.map(fp => <ProductCard key={fp.id} product={fp}/>)
    }
    
    return(
        <Layout>
            { category.length > 0 ?
                <h1>{categoryName}</h1>
                :
                <p className="loading">loading...</p>
            }
            {renderProductItems()}
        </Layout>
    )
}

export default withContext(Category);