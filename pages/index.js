import Header from "../components/header"


export default function Home({user, products}) {

  const renderProductByCategory = (category) => {
    let filteredProducts = products.filter( p => p.category === category)
    return filteredProducts.map(fp => <p>{fp.name}</p>)
  }
  
  return (
    <div>
      <Header user={user}/>
      <h1>Home</h1>
      {renderProductByCategory("phone")}
    </div>
  )
}

export async function getStaticProps(){
  const res1 = await fetch("http://localhost:3000/users/3")
  const user = await res1.json();
  const res2 = await fetch("http://localhost:3000/products")
  const products = await res2.json()
  return {
    props: {
      user,
      products
    }
  }
}

