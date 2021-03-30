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
        <CategoryContainer title="Phones" products={renderProductByCategory("phone")}/>
        <CategoryContainer title="Tablets" products={renderProductByCategory("tablet")}/>
        <CategoryContainer title="Laptops" products={renderProductByCategory("laptop")}/>
        <CategoryContainer title="Smart Watches" products={renderProductByCategory("smart watch")}/>
        <CategoryContainer title="TV's" products={renderProductByCategory("tv")}/>
        <CategoryContainer title="Accessories" products={renderProductByCategory("accessory")}/>
      </div>
      </Layout>
  )
}

export default withContext(Home);