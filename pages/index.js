

export default function Home({user, products}) {
  const renderProducts = () => {
    return products.map( p => <p>{p.name}</p>)
  }
  return (
    <div>
      <h1>Home</h1>
      {renderProducts()}
    </div>
  )
}

export async function getStaticProps(){
  // const userData = await getApiData()
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

