import { useEffect, useState } from 'react';
import Layout from "../components/Layout";
import { useRouter } from 'next/router';
import withContext from "../withContext";
import ProductCard from "../components/ProductCard";


function Category({context}){

    const router = useRouter();
    const { categoryName } = router.query;

    const [ category, setCategory ] = useState();
    useEffect(() => {
        let foundCategory = context.products.filter( p => p.category === categoryName);
        setCategory(foundCategory);
    }, [])

    const renderProductItems = () => {
        return category.map(fp => <ProductCard key={fp.id} product={fp}/>)
    }

    console.log(category)
    return(
        <Layout>
            { category.length > 0 ?
                <h1>{categoryName}</h1>
                :
                <p>Sorry, we couldn't find any {categoryName}</p>
            }
            {/* <h1>Shop {categoryName}s</h1> */}
            {/* {renderProductItems()} */}
        </Layout>
    )
}

export default withContext(Category);