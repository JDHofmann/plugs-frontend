import CategoryContainer from "../components/CategoryContainer"
import Layout from "../components/Layout";
import withContext from "../withContext";

function Home({context}) {

  const renderProductByCategory = (category) => {
    return context.products.filter( p => p.category === category)
  }
  return (
    <Layout>
      <div>
        <h1>Home</h1>
        <CategoryContainer id="phones" title="Phones" products={renderProductByCategory("phone")}/>
        <CategoryContainer id="tablets" title="Tablets" products={renderProductByCategory("tablet")}/>
        <CategoryContainer id="laptops" title="Laptops" products={renderProductByCategory("laptop")}/>
        <CategoryContainer id="smart-wathces" title="Smart Watches" products={renderProductByCategory("smart watch")}/>
        <CategoryContainer id="tvs" title="TV's" products={renderProductByCategory("tv")}/>
        <CategoryContainer id="accessories" title="Accessories" products={renderProductByCategory("accessory")}/>
      </div>
      </Layout>
  )
}

export default withContext(Home);